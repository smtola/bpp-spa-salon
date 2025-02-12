import {useEffect, useState} from "react";
import { useTranslation } from 'react-i18next';
import '../i18n';
interface Product{
    pro_id:string;
    pro_name:string;
    description:string;
    price:number;
    image_url:string;
}
export default function Product() {
    const [product, setProduct] = useState<Product[] | null>(null);
    const [formData, setFormData] = useState({
        productName: "",
        price: 0,
        qtyChange: 0,
        name: "",
        phone: "",
        address: ""
    });
    const [error, setError] = useState({
        phone: "",
        address: "",
    });
    const [isLoading, setIsLoading] = useState(true);

    const [productName, setProductName] = useState<string | null>('');
    const [price, setPrice] = useState<number | null>(0);
    const [errorData, setErrorData] = useState<string | null>(null);
    const [modalID, setModalID] = useState<string>('');
    const [btnLoading, setBtnLoading] = useState(true);
    const [alert, setAlert] = useState<string | null>(null);
    const { t } = useTranslation();
    const [lang, setLang] = useState<string | null>(null);
    useEffect(()=>{
        const localeEn = localStorage.getItem('i18nextLng');
        setLang(localeEn);
    });
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
            productName: productName || "",
            price: price || 0,
        }));
    }, [productName]);

    const fetchData = async () => {
        const apiKey = 'V2-zXfYl-N34Ka-WaWcb-JA4zL-LoOjX-4Xgbf-MXUfn-dy5U0';
        const tableName = "Products";
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
            const result: Product[] = await response.json();
            setProduct(result);
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

    const validateAddress = (address: any) => {
        const addressRegex = /^[A-Za-z0-9\s,.\-\/]+$/;
        return addressRegex.test(address);
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
        product?.map((items) => {
            if (items.pro_id === id) {
                setProductName(items.pro_name);
                setPrice(items.price);
            }
        });
    }
    const handleCloseModal = (e:React.FormEvent) => {
        e.preventDefault();
        setFormData({
            productName: "",
            name: "",
            phone: "",
            price: 0,
            qtyChange: 0,
            address: ""
        });

        const modal = document.getElementById(modalID) as HTMLDialogElement | null;
        if (modal) {
            modal.close();
        }
    }
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const phoneValid = validatePhone(formData.phone);
        const addressValid = validateAddress(formData.address);

        // Merge previous error state and update only the specific field
        setError((prevError) => ({
            ...prevError,
            phone: phoneValid ? "" : t('valid_phone'),
            address: addressValid ? "" : "Invalid address format",
        }));

        if (!phoneValid) {
            // Submit the form data here
            return;
        }

        const apiKey = 'V2-zXfYl-N34Ka-WaWcb-JA4zL-LoOjX-4Xgbf-MXUfn-dy5U0';
        const tableName = "order";
        const appId = '630daa92-8472-4471-a1e6-31b8f7bf869c';
        const endPoint = `https://api.appsheet.com/api/v2/apps/${appId}/tables/${tableName}/query`;

        // telegram
        const TELEGRAM_BOT_TOKEN = '7786727966:AAENBDXFKdVcYAPYkKFkpEta2-UlvoyB1q0'; // Store your token in an environment variable
        const TELEGRAM_CHAT_ID = '-1002459175480'; // Store your group chat ID in an environment variable
        const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
        const message = `
        📦 *New Ordering Product* 📦
        - 📇 *Customer Name:* ${formData.name}
        - 📞 *Phone:* ${formData.phone}
        - 📩 *Address:* ${formData.address}
        - =============================
        - 🏷️ *Product Name:* ${formData.productName}
        - 💵 *Price:* $${formData.price}
        - 🔢 *Quantity:* ${formData.qtyChange}
        - 💵 *Total Amount:* $${formData.price * formData.qtyChange}
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
                            product_name: formData.productName,
                            price: formData.price,
                            qty: formData.qtyChange,
                            total_amount: formData.price * formData.price,
                            name: formData.name,
                            phone: formData.phone,
                            address: formData.address,
                        },
                    ],
                }),
            });

            const data = await res.json();
            const dataAppSheet = await resAppSheet.json();

            if (res.ok) {
                setFormData({
                    productName: "",
                    name: "",
                    phone: "",
                    price: 0,
                    qtyChange: 0,
                    address: ""
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
    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(value);
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
        <div className="w-full h-fit bg-gradient-to-br from-[#ffffff] via-bpp-color-100 to-[#ffffff] pt-10 pb-[6em] px-3 overflow-hidden">
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
            <h2 className={`text-start text-bpp-color-300 text-[16px] md:text-[18px] xl:text-[22px] font-bold xl:ms-[10em] mb-[2em] ${lang == 'kh' ? "font-['Kantumruy_Pro']": "font-['inter']"}`}>{t('our_products')}</h2>
            <div className="max-w-screen-lg mx-auto grid grid-cols-12 items-center justify-center gap-[2vw] lg:gap-[1vw]">
                {product && product.map((product, index)=>
            <div key={index} data-aos="fade-right" data-aos-easing="ease-in-sine"
                className="col-span-6 md:col-span-4 lg:col-span-3 h-full bg-[#ffffff] rounded-[12px] p-2 overflow-hidden transition-all duration-[150]">
                <div className="bg-bpp-color-100/30 rounded-[12px] h-customize h-[186px] md:h-[205px] overflow-hidden">
                    <img src={product.image_url} alt={product.pro_name} className="w-full h-full object-contain object-center p-1"/>
                </div>
                <div className="flex flex-col">
                    <div>
                        <div className="inline-flex items-end space-x-2">
                            <h2 className="text-bpp-color-300 text-customize-1 text-[14px] md:text-[18px] font-bold">RESTORE</h2>
                            <h3 className="text-bpp-color-300 text-customize text-[12px] md:text-[14px] font-bold">Premium</h3>
                        </div>
                        <h2 className="text-bpp-color-300 text-customize-1 text-[14px] md:text-[16px] font-bold">{product.pro_name}</h2>
                        <p className="text-bpp-color-300 text-customize text-[11px] md:text-[12px] font-bold text-pretty">{product.description}</p>
                    </div>
                    <div className="w-full inline-flex justify-between items-end space-x-[2em] md:space-x-[4em] space-y-[10px]">
                        <h2 className="text-bpp-color-300 font-bold bg-bpp-color-100/40 rounded-full px-[14px] py-[1px]">
                            ${product.price}
                        </h2>
                        <button
                            onClick={() => handleModalOpen(product.pro_id)}
                            className={`w-full bg-bpp-color-300 py-[2px] px-[16px] rounded-full text-[#ffffff] hover:bg-bpp-color-200 transition-all duration-[150] ${lang == 'kh' ? "font-['Kantumruy_Pro']": "font-['inter']"}`}>
                            {t('btn_buy')}
                        </button>
                    </div>
                </div>
            </div>
                )}
        </div>
        {/*    modal*/}
            {modalID && product?.map((items, idx)=>
            <dialog key={idx} id={items.pro_id} className="modal">
                <div className="modal-box bg-bpp-color-300">
                    <form>
                        {/* if there is a button in form, it will close the modal */}
                        <button onClick={handleCloseModal} className="btn btn-sm btn-circle btn-ghost text-bpp-color-100 absolute right-2 top-2">✕</button>
                    </form>
                    <div className="mt-[2em]">
                        <form className="space-y-4 pb-[4em]" onSubmit={handleSubmit}>
                            <div >
                                <label className={`text-bpp-color-100 ${lang == 'kh' ? "font-['Kantumruy_Pro']": "font-['inter']"}`} htmlFor="product_name">
                                    {t('product_name')}
                                </label>
                                <input
                                    className={`w-full rounded-lg border-gray-200 p-3 text-sm text-bpp-color-300 ${lang == 'kh' ? "font-['Kantumruy_Pro']": "font-['inter']"}`}
                                    placeholder={t('product_name')}
                                    type="text"
                                    value={formData.productName}
                                    disabled
                                    id="product_name"
                                    required
                                />
                            </div>
                            <div >
                                <label className={`text-bpp-color-100 ${lang == 'kh' ? "font-['Kantumruy_Pro']": "font-['inter']"}`} htmlFor="price">
                                    {t('price')}
                                </label>
                                <input
                                    className={`w-full rounded-lg border-gray-200 p-3 text-sm text-bpp-color-300 ${lang == 'kh' ? "font-['Kantumruy_Pro']": "font-['inter']"}`}
                                    placeholder="Price"
                                    type="text"
                                    value={formData.price}
                                    disabled
                                    id="price"
                                    required
                                />
                            </div>
                            <div >
                                <label className={`text-bpp-color-100 ${lang == 'kh' ? "font-['Kantumruy_Pro']": "font-['inter']"}`} htmlFor="amount">
                                    {t('total_amount')}
                                </label>
                                <input
                                    className={`w-full rounded-lg border-gray-200 p-3 text-sm text-bpp-color-300 ${lang == 'kh' ? "font-['Kantumruy_Pro']": "font-['inter']"}`}
                                    placeholder="Total Amount"
                                    type="hidden"
                                    value={formData.qtyChange * formData.price}
                                    id="amount"
                                    required
                                />
                                <p className="w-fit font-[700] rounded-lg bg-bpp-color-100/20 p-3 text-md text-bpp-color-100">
                                    {formatCurrency(formData.qtyChange * formData.price)}
                                </p>
                            </div>
                            <div className="w-[200px]">
                                <label htmlFor="Quantity" className="text-bpp-color-100">
                                    {t('qty')}
                                </label>

                                <div className="w-full flex items-center rounded-sm border border-gray-200">
                                    <button
                                        onClick={() => setFormData((prevState) => ({ ...prevState, qtyChange: prevState.qtyChange - 1 }))}
                                        disabled={formData.qtyChange <= 0}
                                        type="button"
                                        className="inline-flex justify-center items-center w-16 text-center size-10 leading-10 text-gray-600 transition hover:opacity-75"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#F3DCFF" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
                                            <path d="M5 12l14 0"></path>
                                        </svg>
                                    </button>

                                    <input
                                        type="number"
                                        id="Quantity"
                                        name="Quantity"
                                        value={formData.qtyChange}
                                        onChange={(e) => setFormData({ ...formData, qtyChange: Number(e.target.value) })}
                                        className="h-10 w-16 text-center mx-auto border-transparent text-bpp-color-300 [-moz-appearance:_textfield] sm:text-sm [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                                    />

                                    <button
                                        onClick={() => setFormData((nextState) => ({ ...nextState, qtyChange: nextState.qtyChange + 1 }))}
                                        type="button"
                                        className="inline-flex justify-center items-center w-16 text-center size-10 leading-10 text-gray-600 transition hover:opacity-75"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#F3DCFF" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
                                            <path d="M12 5l0 14"></path>
                                            <path d="M5 12l14 0"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <div >
                                <label className={`text-bpp-color-100 ${lang == 'kh' ? "font-['Kantumruy_Pro']": "font-['inter']"}`} htmlFor="name">
                                    {t('name')}
                                </label>
                                <input
                                    className={`w-full rounded-lg border-gray-200 p-3 text-sm text-bpp-color-300 ${lang == 'kh' ? "font-['Kantumruy_Pro']": "font-['inter']"}`}
                                    placeholder={t('placeholder_name')}
                                    type="text"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div
                                className={`grid grid-cols-1 gap-4 sm:grid-cols-2 ${lang == 'kh' ? "font-['Kantumruy_Pro']": "font-['inter']"}`}>

                                <div >
                                    <label className="text-bpp-color-100" htmlFor="phone">
                                        {t('phone')}
                                    </label>
                                    <input
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm text-bpp-color-300"
                                        placeholder={t('placeholder_phone')}
                                        type="tel"
                                        id="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                    {error.phone && <p className="text-[#ff0000]">{error.phone}</p>}
                                </div>
                            </div>

                            <div >
                                <label className={`text-bpp-color-100 ${lang == 'kh' ? "font-['Kantumruy_Pro']": "font-['inter']"}`} htmlFor="address">
                                    {t('add')}
                                </label>
                                <textarea
                                    className={`w-full rounded-lg border-gray-200 p-3 text-sm text-bpp-color-300 ${lang == 'kh' ? "font-['Kantumruy_Pro']": "font-['inter']"}`}
                                    placeholder={t('placeholder_address')}
                                    id="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                ></textarea>
                                {error.address && <p className={`text-[#ff0000] ${lang == 'kh' ? "font-['Kantumruy_Pro']": "font-['inter']"}`}>{error.address}</p>}
                            </div>

                            <div className="mt-4" >
                                <button
                                    type="submit"
                                    className={`inline-block w-full rounded-lg bg-bpp-color-200 hover:bg-bpp-color-100 hover:shadow-md float-end px-5 py-3 font-medium text-bpp-color-300 sm:w-auto ${lang == 'kh' ? "font-['Kantumruy_Pro']": "font-['inter']"}`}
                                >
                                    {!btnLoading ? <div className="flex justify-center gap-2 items-center"><span className="loading loading-spinner text-bpp-color-100"></span> <p>loading...</p></div> :<p>{t('btn_buy_1')}</p>}
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