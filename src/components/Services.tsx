// Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {useEffect, useState} from "react";

interface Service {
    sv_id:string;
    product_name:string;
    image_url:string;
}
export default function Services() {
    const [service, setService] = useState<Service[] | null>(null);
    const [error, setError] = useState({
        phone: "",
        email: "",
    });
    const [isLoading, setIsLoading] = useState(true);

    const [productName, setProductName] = useState<string | null>('');
    const [formData, setFormData] = useState({
        product_name: "",
        name: "",
        email: "",
        phone: "",
        at: "",
        message:""
    });
    const [errorData, setErrorData] = useState<string | null>(null);
    const [modalID, setModalID] = useState<string>('');
    const [btnLoading, setBtnLoading] = useState(true);
    const [alert, setAlert] = useState<string | null>(null);

    useEffect(()=>{
        fetchData();
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
            product_name: productName || "",
        }));
    }, [productName]);
    const formatDate = (isoString: string) => {
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
        service?.map((items) => {
            if (items.sv_id === id) {
                setProductName(items.product_name);
            }
        });
    }
    const fetchData = async () => {
        const apiKey = 'V2-zXfYl-N34Ka-WaWcb-JA4zL-LoOjX-4Xgbf-MXUfn-dy5U0';
        const tableName = "Service";
        const appId = '630daa92-8472-4471-a1e6-31b8f7bf869c';
        const endPoint = `https://api.appsheet.com/api/v2/apps/${appId}/tables/${tableName}/query`;

        setIsLoading(true);
        try{
            const response = await fetch(endPoint, {
                method: "POST",
                headers:{
                    "Content-Type": "application/json",
                    applicationAccessKey: apiKey,
                },
                body:JSON.stringify({
                    Action:"Find",
                    Properties:{
                        Locale:"en-US",
                        Timezone: "UTC",
                    },
                    Rows:[]
                }),
            });
            if(!response.ok){
                throw new Error("Failed to fetch data from Database");
            }
            const result: Service[] = await response.json();
            setService(result);
        }catch (err){
            setErrorData((err as Error).message);
        }finally {
            setIsLoading(false);
        }
    }
    const handleChange = (e: any) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    const validatePhone = (phone: any) => {
        const phoneRegex = /^(?:\+855|0)(?:[1-9]{1}[0-9]{7})$/;
        return phoneRegex.test(phone);
    };

    const validateEmail = (email: any) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const phoneValid = validatePhone(formData.phone);
        const emailValid = validateEmail(formData.email);

        // Merge previous error state and update only the specific field
        setError((prevError) => ({
            ...prevError,
            phone: phoneValid ? "" : "Invalid phone number",
            email: emailValid ? "" : "Invalid email format",
        }));

        if (!phoneValid && !emailValid) {
            // Submit the form data here
           return;
        }

        const apiKey = 'V2-zXfYl-N34Ka-WaWcb-JA4zL-LoOjX-4Xgbf-MXUfn-dy5U0';
        const tableName = "booking";
        const appId = '630daa92-8472-4471-a1e6-31b8f7bf869c';
        const endPoint = `https://api.appsheet.com/api/v2/apps/${appId}/tables/${tableName}/query`;

        // telegram
        const TELEGRAM_BOT_TOKEN = '7786727966:AAENBDXFKdVcYAPYkKFkpEta2-UlvoyB1q0'; // Store your token in an environment variable
        const TELEGRAM_CHAT_ID = '-1002459175480'; // Store your group chat ID in an environment variable
        const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
        const message = `
        📦 *New Service Booking* 📦
        - 📇 *Customer Name:* ${formData.name}
        - 📞 *Phone:* ${formData.phone}
        - ✉️ *Email:* ${formData.email}
        - 🕐 *Arrival Time:* ${formatDate(formData.at)}
        - 📩 *Message:* ${formData.message}
        - =============================
        - 🏷️ *Name:* ${productName}
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
                            email: formData.email,
                            arrival_time: formatDate(formData.at),
                            message: formData.message,
                        },
                    ],
                }),
            });

            const data = await res.json();
            const dataAppSheet = await resAppSheet.json();

            if (res.ok) {
                setFormData({
                    product_name: "",
                    name: "",
                    email: "",
                    phone: "",
                    at: "",
                    message: ""
                });

                const modal = document.getElementById(modalID) as HTMLDialogElement | null;
                if (modal) {
                    modal.close();
                }
                setBtnLoading(false);
                setAlert("Message sent successfully!");
            } else {
                setAlert(`Error: ${data.message}`);
                setAlert(`Error: ${dataAppSheet.message}`);
            }
        } catch (error) {
            setAlert("An error occurred while sending the message.");
            console.error(error);
        }
    };

    if (isLoading) {
        return (
            <div className="flex flex-col items-center">
                <div className="w-12 h-12 border-4 border-bpp-color-300 border-dashed rounded-full animate-spin"></div>
                <h2 className="
                text-[12px]
                lg:text-[14px]
                xl:text-[20px]
                text-bpp-color-300
                font-bold
                my-6
                font-['Moulpali']">
                    ពោធិ៍ព្រឹក្សបាយ៍ន ស្បា និងសាឡន
                </h2>
            </div>
        );
    }
    if (errorData) {
        return <div>Error: {errorData}</div>;
    }
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
                <h2 className="font-bold text-[16px] md:text-[32px] text-[#ffffff]">Our Services</h2>
                <h2 className="font-light text-[14px] md:text-[18px] text-[#ffffff]">Facial Treatment</h2>
            </div>
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
                    {service && service.map((services, index) => (
                        <SwiperSlide
                            key={index} className="transition-all duration-[150] !h-full">
                            <div className="bg-[#ffffff] rounded-[20px] !h-full overflow-hidden">
                                <div className="overflow-hidden h-[186px] md:h-[216px] lg:h-[230px] 2xl:h-[296px]">
                                    <img src={services.image_url} alt={`Product ${index + 1}`}
                                         className="w-full h-full object-cover object-center rounded-[20px] p-2"
                                    />
                                </div>
                                <div className="px-2 pb-3">
                                    <h2 className="text-[14px] md:text-[18px] text-bpp-color-300 font-medium my-2">
                                        {services.product_name}
                                    </h2>
                                    <button
                                        onClick={() =>handleModalOpen(services.sv_id)}
                                        className="bg-bpp-color-300 text-[#ffffff] py-[2px] px-[17px] rounded-full hover:bg-bpp-color-200 transition-all duration-[150]">
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
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
            {modalID && service?.map((items, idx)=>
                <dialog key={idx} id={items.sv_id} className="modal">
                    <div className="modal-box bg-bpp-color-300">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost text-bpp-color-100 absolute right-2 top-2">✕</button>
                        </form>
                        <div className="mt-[2em]">
                            <form onSubmit={handleSubmit} className="space-y-4 pb-[4em] md:pb-0">
                                <div>
                                    <label className="text-bpp-color-100" htmlFor="product_name">Product Name</label>
                                    <input
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm text-bpp-color-300"
                                        placeholder="Product name"
                                        type="text"
                                        value={formData.product_name}
                                        onChange={handleChange}
                                        disabled
                                        id="product_name"
                                    />
                                </div>
                                <div>
                                    <label className="text-bpp-color-100" htmlFor="name">Name</label>
                                    <input
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm text-bpp-color-300"
                                        placeholder="Name"
                                        type="text"
                                        id="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div >
                                        <label className="text-bpp-color-100" htmlFor="email">Email</label>
                                        <input
                                            className="w-full rounded-lg border-gray-200 p-3 text-sm text-bpp-color-300"
                                            placeholder="Email address"
                                            type="email"
                                            id="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                        {error.email && <p className="text-[#ff0000]">{error.email}</p>}
                                    </div>

                                    <div>
                                        <label className="text-bpp-color-100" htmlFor="phone">Phone</label>
                                        <input
                                            className="w-full rounded-lg border-gray-200 p-3 text-sm text-bpp-color-300"
                                            placeholder="Phone Number"
                                            type="tel"
                                            id="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                        />
                                        {error.phone && <p className="text-[#ff0000]">{error.phone}</p>}
                                    </div>
                                </div>

                                <div>
                                    <label className="text-bpp-color-100" htmlFor="at">Arrival Time</label>
                                    <input
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm text-bpp-color-300"
                                        placeholder="Arrival Time"
                                        type="datetime-local"
                                        id="at"
                                        value={formData.at}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div>
                                    <label className="text-bpp-color-100" htmlFor="message">Message</label>

                                    <textarea
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm text-bpp-color-300"
                                        placeholder="Message"
                                        id="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>

                                <div className="mt-4" >
                                    <button
                                        type="submit"
                                        className="inline-block w-full rounded-lg bg-bpp-color-200 hover:bg-bpp-color-300 hover:shadow-md float-end px-5 py-3 font-medium text-bpp-color-300 sm:w-auto"
                                    >
                                        {!btnLoading ? <div className="flex justify-center gap-2 items-center"><span className="loading loading-spinner text-bpp-color-100"></span> <p>loading...</p></div> :<p>Book Now</p>}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </dialog>
            )}
        </div>
    )
}