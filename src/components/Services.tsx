// Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Pagination, Navigation } from 'swiper/modules';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useTranslation } from 'react-i18next';
import '../i18n';
import {useEffect, useState} from "react";
import { Items } from "./ItemService";

interface ItemProp{
    items: Items[] | null;
}
export default function Services({items}:ItemProp) {
    const [error, setError] = useState({
        phone: "",
    });
    const [productName, setProductName] = useState<string | null>('');
    const [formData, setFormData] = useState({
        pro_name: "",
        name: "",
        phone: "",
        at: new Date(),
        message:""
    });
    const [modalID, setModalID] = useState<string>('');
    const [btnLoading, setBtnLoading] = useState(true);
    const [alert, setAlert] = useState<string | null>(null);
    const {t} = useTranslation();
    const [lang, setLang] = useState<string | null>(null);

    useEffect(()=>{
        const localeEn = localStorage.getItem('i18nextLng');
        setLang(localeEn);
    });
    useEffect(()=>{
        if (alert) {
            const timer = setTimeout(() => {
                setAlert(null);
            }, 1000);
            return () => clearTimeout(timer);
        }

    },[alert, setAlert]);

    useEffect(() => {
        // Update formData whenever productName changes
        setFormData((prev) => ({
            ...prev,
            pro_name: productName || "",
        }));
    }, [productName]);
    const formatDate = (isoString: any) => {
        const date = new Date(isoString);
        const options: Intl.DateTimeFormatOptions = {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
        };

        return date.toLocaleString('en-US', options).replace(',', '');
    };
    const handleModalOpen = (id:string) =>{
        setModalID(id);
        setTimeout(() => {
            const bindingElement = document.getElementById(id);
            if (bindingElement) {
                const dialogElement = bindingElement as HTMLDialogElement;
                if (dialogElement && typeof dialogElement.showModal === "function") {
                    dialogElement.showModal();
                } else {
                    console.error(
                        `The element with ID "${id}" does not support the "showModal" method. Ensure it's a <dialog> element.`
                    );
                }
            } else {
                console.error(`No element found with ID "${id}".`);
            }
        }, 0);
        items?.map((items) => {
            if (items.item_id === id) {
                setProductName(items.pro_name);
            }
        });
    }

    const handleCloseModal = (e:React.FormEvent) => {
        e.preventDefault();
        setFormData({
            ...formData,
            name: '',
            phone: '',
            message: '',
            at: new Date()
        });

        const modal = document.getElementById(modalID) as HTMLDialogElement | null;
        if (modal) {
            modal.close();
        }
    }
    const handleChange = (e: any) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };
    const handleChangeDate = (date: Date | null) => {
        setFormData({
            ...formData,
            at: date ?? new Date(),
        });
    };
    const validatePhone = (phone: any) => {
        const phoneRegex = /^(?:\+855|0)(?:[1-9]{1}[0-9]{8})|(?:[1-9]{1}[0-9]{7})$/;
        return phoneRegex.test(phone);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const phoneValid = validatePhone(formData.phone);

        // Merge previous error state and update only the specific field
        setError((prevError) => ({
            ...prevError,
            phone: phoneValid ? "" : t('valid_phone')
        }));

        if (phoneValid) {

            const apiKey = 'V2-zXfYl-N34Ka-WaWcb-JA4zL-LoOjX-4Xgbf-MXUfn-dy5U0';
            const appId = '630daa92-8472-4471-a1e6-31b8f7bf869c';
            const tableName = "booking";
            const endPoint = `https://api.appsheet.com/api/v2/apps/${appId}/tables/${tableName}/query`;

            // telegram
            const TELEGRAM_BOT_TOKEN = '7786727966:AAENBDXFKdVcYAPYkKFkpEta2-UlvoyB1q0'; // Store your token in an environment variable
            const TELEGRAM_CHAT_ID = '-1002459175480'; // Store your group chat ID in an environment variable
            const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
            const message = `
            📦 *New Service Booking* 📦
            - 📇 *Customer Name:* ${formData.name}
            - 📞 *Phone:* ${formData.phone}
            - 🕐 *Arrival Time:* ${formatDate(formData.at)}
            - 📩 *Message:* ${formData.message}
            - =============================
            - 🏷️ *Product Name:* ${productName}
            `;

            setBtnLoading(true);
            try {
                const res = await fetch(url, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        chat_id: TELEGRAM_CHAT_ID,
                        text: message,
                        parse_mode: 'Markdown', // Enables formatting
                    }),
                });

                const resAppSheet = await fetch(endPoint, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        applicationAccessKey: apiKey,
                    },
                    body: JSON.stringify({
                        Action: "Add",
                        Properties: {
                            Locale: "en-US",
                            Timezone: "UTC",
                        },
                        Rows: [
                            {
                                name: formData.name,
                                phone: formData.phone,
                                arrival_time: formatDate(formData.at),
                                message: formData.message,
                            },
                        ],
                    }),
                });

                const data = await res.json();
                const dataAppSheet = await resAppSheet.json();
                setBtnLoading(false);
                if (res.ok) {
                    setAlert("Message sent successfully!");
                } else {
                    setAlert(`Error: ${data.message}`);
                    setAlert(`Error: ${dataAppSheet.message}`);
                }
                setFormData({
                    ...formData,
                    name: "",
                    phone: "",
                    at: new Date(),
                    message: ""
                });

                const modal = document.getElementById(modalID) as HTMLDialogElement | null;
                if (modal) {
                    modal.close();
                }

            } catch (error) {
                    setAlert("An error occurred while sending the message.");
                    console.error(error);
                }finally {
                setBtnLoading(false);
            }
        }
    };
    return(
        <div className="min-h-[72vh] md:min-h-[70vh] lg:min-h-[59vh] xl:min-h-screen w-full bg-gradient-to-r from-bpp-color-300 to-bpp-color-100 ">
            {alert ? (
                <div
                    role="alert"
                    className="fixed top-4 right-3 rounded border-s-4 border-bpp-color-300 bg-bpp-color-100 p-2"
                >
                    <p className=" text-[16px] text-[#0f8237]">
                        {alert}
                    </p>
                </div>
            ) : (
                ""
            )}

            <div className="max-w-screen-lg 2xl:max-w-screen-xl mx-auto px-3 md:px-5 py-5">
            <div className="flex items-center space-x-[3em] xl:space-x-[14em] 2xl:space-x-[22em] md:pt-[2em] 2xl:pt-[3em] ">
                <h2 data-aos="fade-right" className={`font-bold text-[16px] md:text-[32px] text-[#ffffff] ${lang == 'kh' ? "font-['Kantumruy_Pro']": "font-['inter']"}`}>{t('our_service')}</h2>
            </div>
                <h2 className={`font-light text-[16px] md:text-[20px] text-[#ffffff] text-center ${lang == 'kh' ? "font-['Kantumruy_Pro']": "font-['inter']"}`}>{t('ft')}</h2>

                <div className="relative mt-[2em]">
                {/* Pagination Positioned on Top */}
                <div className="absolute top-0 left-0 right-0">
                    <div id="custom-pagination"
                         className="swiper-pagination">
                    </div>
                </div>

                <Swiper
                    slidesPerView={2} // 4 columns
                    grid={{ rows: 2, fill: 'row' }} // 2 rows
                    spaceBetween={12}
                    pagination={{
                        el:"#custom-pagination",
                        clickable: true,
                    }}
                    navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    }} // Enable navigation
                    modules={[Grid, Pagination, Navigation]}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween:12
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween:18
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween:18
                        },
                    }}
                    className="mySwiper transition-all duration-[150]" // Add padding-top for pagination space
                >
                    {items && items.map((services, index) => (
                      services.category === 'services' ?
                          <SwiperSlide
                              key={index} data-aos={index % 2 === 1 ? "fade-left":"fade-right"} className="transition-all duration-[150] !h-full">
                              <div className="bg-[#ffffff] rounded-[20px] !h-full overflow-hidden">
                                  <div className="overflow-hidden h-customize h-[186px] md:h-[216px] lg:h-[230px] 2xl:h-[296px]">
                                      <img src={services.image_url} alt={`Product ${index + 1}`}
                                           className="w-full h-full object-cover object-center rounded-[20px] p-2"
                                      />
                                  </div>
                                  <div className="px-2 pb-3">
                                      <h2 className="text-customize-1 text-[12px] md:text-[18px] text-bpp-color-300 font-medium my-2">
                                          {services.pro_name}
                                      </h2>
                                      <button
                                          onClick={() =>handleModalOpen(services.item_id)}
                                          className={`text-customize-1 bg-bpp-color-300 text-[#ffffff] py-[2px] px-[15px] rounded-full hover:bg-bpp-color-200 transition-all duration-[150] ${lang == 'kh' ? "font-['Kantumruy_Pro']": "font-['inter']"}`}>
                                          {t('btn_book_now')}
                                      </button>
                                  </div>
                              </div>
                          </SwiperSlide>
                          : null
                    ))}
                    <div className="swiper-button-next">
                        <svg className="!absolute z-[50] !w-[24px]" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.46503 2.18872L9.78039 8.28486C11.1619 9.43612 11.2271 11.5358 9.91971 12.7706L2.46503 19.8111" stroke="white" strokeWidth="4" strokeLinecap="round"/>
                        </svg>
                    </div>
                    <div className="swiper-button-prev">
                        <svg className="!absolute z-[50] !w-[24px]" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.535 19.8112L3.21961 13.715C1.8381 12.5638 1.77289 10.4641 3.08029 9.22931L10.535 2.18878" stroke="white" strokeWidth="4" strokeLinecap="round"/>
                        </svg>
                    </div>
                </Swiper>
            </div>
        </div>

            {/*  Modal  */}
            {modalID && items?.map((items, idx)=>
                items.category == 'services' ?
                <dialog key={idx} id={items.item_id} className="modal">
                    <div className="modal-box bg-bpp-color-300">
                        <button onClick={handleCloseModal} className="btn btn-sm btn-circle btn-ghost text-bpp-color-100 absolute right-2 top-2">✕</button>
                        <div className="mt-[2em]">
                            <form onSubmit={handleSubmit} className="space-y-4 pb-[4em] md:pb-0">
                                <div>
                                    <label className={`text-bpp-color-100 ${lang == 'kh' ? "font-['Kantumruy_Pro']": "font-['inter']"}`} htmlFor="pro_name"> {t('product_name')} </label>
                                    <input
                                        className={`w-full rounded-lg border-gray-200 p-3 text-sm text-bpp-color-300 ${lang == 'kh' ? "font-['Kantumruy_Pro']": "font-['inter']"}`}
                                        placeholder={t('product_name')}
                                        type="text"
                                        value={formData.pro_name}
                                        onChange={handleChange}
                                        disabled
                                        id="pro_name"
                                    />
                                </div>
                                <div>
                                    <label className={`text-bpp-color-100 ${lang == 'kh' ? "font-['Kantumruy_Pro']": "font-['inter']"}`} htmlFor="name">{t('name')}</label>
                                    <input
                                        className={`w-full rounded-lg border-gray-200 p-3 text-sm text-bpp-color-300 ${lang == 'kh' ? "font-['Kantumruy_Pro']": "font-['inter']"}`}
                                        placeholder={t('placeholder_name')}
                                        type="text"
                                        id="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="grid grid-cols-1 gap-4">
                                    <div>
                                        <label className={`text-bpp-color-100 ${lang == 'kh' ? "font-['Kantumruy_Pro']": "font-['inter']"}`} htmlFor="phone">{t('phone')}</label>
                                        <input
                                            className={`w-full rounded-lg border-gray-200 p-3 text-sm text-bpp-color-300 ${lang == 'kh' ? "font-['Kantumruy_Pro']": "font-['inter']"}`}
                                            placeholder={t('placeholder_phone')}
                                            type="tel"
                                            id="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                        />
                                        {error.phone && <p className={`text-[#ff0000] ${lang == 'kh' ? "font-['Kantumruy_Pro']": "font-['inter']"}`}>{error.phone}</p>}
                                    </div>
                                </div>

                                <div className="flex flex-col">
                                    <label className={`text-bpp-color-100 ${lang == 'kh' ? "font-['Kantumruy_Pro']": "font-['inter']"}`} htmlFor="at">{t('arrival_time')}</label>
                                    <DatePicker
                                        className={`w-full appearance-none rounded-lg border-gray-200 p-3 text-sm text-bpp-color-300 ${lang == 'kh' ? "font-['Kantumruy_Pro']": "font-['inter']"}`}
                                        id="at"
                                        selected={formData.at}
                                        onChange={handleChangeDate}
                                        showTimeSelect
                                        timeFormat="h:mm aa"
                                        timeIntervals={15}
                                        timeCaption="Time"
                                        dateFormat="dd/MM/yyyy h:mm aa"
                                    />
                                </div>

                                <div>
                                    <label className={`text-bpp-color-100 ${lang == 'kh' ? "font-['Kantumruy_Pro']": "font-['inter']"}`} htmlFor="message">{t('message')}</label>

                                    <textarea
                                        className={`w-full rounded-lg border-gray-200 p-3 text-sm text-bpp-color-300 ${lang == 'kh' ? "font-['Kantumruy_Pro']": "font-['inter']"}`}
                                        placeholder={t('placeholder_message')}
                                        id="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>

                                <div className="mt-4" >
                                    <button
                                        type="submit"
                                        className={`inline-block w-full rounded-lg bg-bpp-color-200 hover:bg-bpp-color-100 hover:shadow-md float-end px-5 py-3 font-medium text-bpp-color-300 sm:w-auto ${lang == 'kh' ? "font-['Kantumruy_Pro']": "font-['inter']"}`}
                                    >
                                        {!btnLoading ? <div className="flex justify-center gap-2 items-center"><span className="loading loading-spinner text-bpp-color-100"></span> <p>loading...</p></div> :<p>{t('btn_book_now_1')}</p>}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </dialog>:null
            )}
        </div>
    )
}