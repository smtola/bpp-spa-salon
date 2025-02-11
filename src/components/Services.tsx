// Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import FacialDetoxSpa from '../assets/images/facial_detox_spa.png';
import {useState} from "react";
export default function Services() {
    const [formData, setFormData] = useState({
        product_name: "",
        name: "",
        email: "",
        phone: "",
        at: "",
        message:""
    });

    const [error, setError] = useState({
        phone: "",
        email: "",
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

    const handleSubmit = (e: any) => {
        e.preventDefault();

        const phoneValid = validatePhone(formData.phone);
        const emailValid = validateEmail(formData.email);

        // Merge previous error state and update only the specific field
        setError((prevError) => ({
            ...prevError,
            phone: phoneValid ? "" : "Invalid phone number",
            email: emailValid ? "" : "Invalid email format",
        }));

        if (phoneValid && emailValid) {
            // Submit the form data here
            console.log("Form submitted successfully", formData);
        }
    };
    return(
        <div className="min-h-[72vh] md:min-h-[70vh] lg:min-h-[59vh] xl:min-h-screen w-full bg-gradient-to-r from-bpp-color-300 to-bpp-color-100 ">
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
                    {Array.from({ length: 10 }).map((_, index) => (
                        <SwiperSlide
                            key={index} className="transition-all duration-[150]">
                            <div className="bg-[#ffffff] rounded-[20px] ">
                                <div>
                                    <img src={FacialDetoxSpa} alt={`Product ${index + 1}`}
                                         className="w-full object-cover object-center rounded-[12px] p-2"
                                    />
                                </div>
                                <div className="px-2 pb-3">
                                    <h2 className="text-[18px] text-bpp-color-300 font-medium my-2">
                                        Product {index + 1}
                                    </h2>
                                    <button
                                        onClick={() => {
                                            const modal = document.getElementById('my_modal_3') as HTMLDialogElement | null;
                                            modal?.showModal();
                                        }}
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
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box bg-bpp-color-300">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost text-bpp-color-100 absolute right-2 top-2">✕</button>
                    </form>
                    <div className="mt-[2em]">
                        <form onClick={handleSubmit} className="space-y-4">
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

                            <div className="mt-4" data-aos="fade-down" data-aos-easing="ease-in-sine">
                                <button
                                    type="submit"
                                    className="inline-block w-full rounded-lg bg-bpp-color-200 hover:bg-bpp-color-100 hover:shadow-md float-end px-5 py-3 font-medium text-bpp-color-300 sm:w-auto"
                                >
                                    Book now
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    )
}