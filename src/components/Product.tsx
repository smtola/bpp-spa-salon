import KHM from '../assets/images/product.png'
import {useState} from "react";
export default function Product() {
    const [formData, setFormData] = useState({
        productName: "",
        price: 0,
        qtyChange: 0,
        name: "",
        email: "",
        phone: "",
        address: "",
    });

    const [error, setError] = useState({
        phone: "",
        email: "",
        address: "",
    });
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

    const validateAddress = (address: any) => {
        const addressRegex = /^[A-Za-z0-9\s,.\-\/]+$/;
        return addressRegex.test(address);
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();

        const phoneValid = validatePhone(formData.phone);
        const emailValid = validateEmail(formData.email);
        const addressValid = validateAddress(formData.address);

        // Merge previous error state and update only the specific field
        setError((prevError) => ({
            ...prevError,
            phone: phoneValid ? "" : "Invalid phone number",
            email: emailValid ? "" : "Invalid email format",
            address: addressValid ? "" : "Invalid address format",
        }));

        if (phoneValid && emailValid && addressValid) {
            // Submit the form data here
            console.log("Form submitted successfully", formData);
        }
    };

    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(value);
    };
    return(
        <div className="w-full h-fit bg-gradient-to-br from-[#ffffff] via-bpp-color-100 to-[#ffffff] pt-10 pb-[6em] px-3 overflow-hidden">
            <h2 className="text-start text-bpp-color-300 text-[16px] md:text-[18px] xl:text-[22px] font-bold xl:ms-[10em] mb-[2em]">Our Products</h2>
            <div className="max-w-screen-lg mx-auto grid grid-cols-12 items-center justify-center gap-[2vw] lg:gap-[1vw]">
            <div  data-aos="fade-right" data-aos-easing="ease-in-sine"
                className="col-span-6 md:col-span-4 lg:col-span-3 h-full bg-[#ffffff] rounded-[12px] p-2 overflow-hidden transition-all duration-[150]">
                <div className="bg-bpp-color-100/30 rounded-[12px]">
                    <img src={KHM} alt="product" className="w-full h-full object-center object-center p-1"/>
                </div>
                <div className="flex flex-col">
                    <div>
                        <div className="inline-flex items-end space-x-2">
                            <h2 className="text-bpp-color-300 text-[14px] md:text-[18px] font-bold">RESTORE</h2>
                            <h3 className="text-bpp-color-300 text-[12px] md:text-[14px] font-bold">Premium</h3>
                        </div>
                        <h2 className="text-bpp-color-300 text-[14px] md:text-[16px] font-bold">KERATIN HAIR MASK</h2>
                        <p className="text-bpp-color-300 text-[11px] md:text-[12px] font-bold text-pretty">Made with 100% Organic Ingredients</p>
                    </div>
                    <div className="w-full inline-flex justify-between items-end space-x-[2.5em] md:space-x-[4em] space-y-[10px]">
                        <h2 className="text-bpp-color-300 font-bold bg-bpp-color-100/40 rounded-full px-[14px] py-[1px]">
                            $35
                        </h2>
                        <button
                            onClick={() => {
                                const modal = document.getElementById('my_modal_4') as HTMLDialogElement | null;
                                modal?.showModal();
                            }}
                            className="w-full bg-bpp-color-300 py-[2px] px-[16px] rounded-full text-[#ffffff] hover:bg-bpp-color-200 transition-all duration-[150]">
                            Buy
                        </button>
                    </div>
                </div>
            </div>

            <div data-aos="fade-left" data-aos-easing="ease-in-sine"
                className="col-span-6 md:col-span-4 lg:col-span-3 h-full bg-[#ffffff] rounded-[12px] p-2 overflow-hidden transition-all duration-[150]">
                <div className="bg-bpp-color-100/30 rounded-[12px]">
                    <img src={KHM} alt="product" className="w-full h-full object-center object-center p-1"/>
                </div>
                <div className="flex flex-col">
                    <div>
                        <div className="inline-flex justify-center items-end space-x-2">
                            <h2 className="text-bpp-color-300 text-[14px] md:text-[18px] font-bold">RESTORE</h2>
                            <h3 className="text-bpp-color-300 text-[12px] md:text-[14px] font-bold">Premium</h3>
                        </div>
                        <h2 className="text-bpp-color-300 text-[14px] md:text-[16px] font-bold">HAIR SHAMPOO</h2>
                        <p className="text-bpp-color-300 text-[11px] md:text-[12px] font-bold text-pretty">Made with 100% Organic Ingredients</p>
                    </div>
                    <div className="w-full inline-flex justify-between items-end space-x-[2.5em] md:space-x-[4em] space-y-[10px]">
                        <h2 className="text-bpp-color-300 font-bold bg-bpp-color-100/40 rounded-full px-[14px] py-[1px]">
                            $32
                        </h2>
                        <button
                            onClick={() => {
                                const modal = document.getElementById('my_modal_4') as HTMLDialogElement | null;
                                modal?.showModal();
                            }}
                            className="w-full bg-bpp-color-300 py-[2px] px-[16px] rounded-full text-[#ffffff] hover:bg-bpp-color-200 transition-all duration-[150]">
                            Buy
                        </button>
                    </div>
                </div>
            </div>
        </div>
        {/*    modal*/}

            <dialog id="my_modal_4" className="modal">
                <div className="modal-box bg-bpp-color-300">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost text-bpp-color-100 absolute right-2 top-2">✕</button>
                    </form>
                    <div className="mt-[2em]">
                        <form className="space-y-4 pb-[4em] md:pb-0" onSubmit={handleSubmit}>
                            <div data-aos="fade-down" data-aos-easing="ease-in-sine">
                                <label className="text-bpp-color-100" htmlFor="product_name">
                                    Product Name
                                </label>
                                <input
                                    className="w-full rounded-lg border-gray-200 p-3 text-sm text-bpp-color-300"
                                    placeholder="Product name"
                                    type="text"
                                    value={formData.productName}
                                    disabled
                                    id="product_name"
                                    required
                                />
                            </div>
                            <div data-aos="fade-down" data-aos-easing="ease-in-sine">
                                <label className="text-bpp-color-100" htmlFor="price">
                                    Price
                                </label>
                                <input
                                    className="w-full rounded-lg border-gray-200 p-3 text-sm text-bpp-color-300"
                                    placeholder="Price"
                                    type="text"
                                    value={formData.price}
                                    disabled
                                    id="price"
                                    required
                                />
                            </div>
                            <div data-aos="fade-down" data-aos-easing="ease-in-sine">
                                <label className="text-bpp-color-100" htmlFor="amount">
                                    Total Amount
                                </label>
                                <input
                                    className="w-full rounded-lg border-gray-200 p-3 text-sm text-bpp-color-300"
                                    placeholder="Total Amount"
                                    type="hidden"
                                    value={formData.qtyChange * 35}
                                    id="amount"
                                    required
                                />
                                <p className="w-fit font-[700] rounded-lg bg-bpp-color-100/20 p-3 text-md text-bpp-color-100">
                                    {formatCurrency(formData.qtyChange * 35)}
                                </p>
                            </div>
                            <div className="w-[200px]" data-aos="fade-down" data-aos-easing="ease-in-sine">
                                <label htmlFor="Quantity" className="text-bpp-color-100">
                                    Quantity
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

                            <div data-aos="fade-down" data-aos-easing="ease-in-sine">
                                <label className="text-bpp-color-100" htmlFor="name">
                                    Name
                                </label>
                                <input
                                    className="w-full rounded-lg border-gray-200 p-3 text-sm text-bpp-color-300"
                                    placeholder="Name"
                                    type="text"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div
                                className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div data-aos="fade-left" data-aos-easing="ease-in-sine">
                                    <label className="text-bpp-color-100" htmlFor="email">
                                        Email
                                    </label>
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

                                <div data-aos="fade-right" data-aos-easing="ease-in-sine">
                                    <label className="text-bpp-color-100" htmlFor="phone">
                                        Phone
                                    </label>
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

                            <div data-aos="fade-down" data-aos-easing="ease-in-sine">
                                <label className="text-bpp-color-100" htmlFor="address">
                                    Address
                                </label>
                                <textarea
                                    className="w-full rounded-lg border-gray-200 p-3 text-sm text-bpp-color-300"
                                    placeholder="Address"
                                    id="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                ></textarea>
                                {error.address && <p className="text-[#ff0000]">{error.email}</p>}
                            </div>

                            <div className="mt-4" data-aos="fade-down" data-aos-easing="ease-in-sine">
                                <button
                                    type="submit"
                                    className="inline-block w-full rounded-lg bg-bpp-color-200 hover:bg-bpp-color-100 hover:shadow-md float-end px-5 py-3 font-medium text-bpp-color-300 sm:w-auto"
                                >
                                    Buy
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    )
}