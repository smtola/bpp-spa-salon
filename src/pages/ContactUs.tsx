import Navigations from "../components/Navigations";
import Navbar from "../components/Navbar";
import tree from "../assets/images/treeLayer.png";
import CallCenter from "../assets/images/call_center.png";
import '../components/Aboutus.css';
import Logo from "../assets/images/logo_white.png";
import {useEffect, useRef, useState} from "react";
import GoToTop from "../components/GoToTop";
import Scroll from "../components/Scroll";
import { useTranslation } from 'react-i18next';
import '../i18n';
export default function ContactUs(){
    const services = useRef<HTMLDivElement>(null);
    const products = useRef<HTMLDivElement>(null);
    const {t}= useTranslation();
    const [lang, setLang] = useState<string | null>(null);
    useEffect(()=>{
        const localeEn = localStorage.getItem('i18nextLng');
        setLang(localeEn);
    });
    return(
        <div className="scroll-smooth">
            <Scroll />
            <Navigations services={services} products={products}/>
            <div>
                {/* Header Section*/}
                <section className="relative flex flex-col justify-end items-start overflow-hidden min-h-screen md:min-h-[90vh] xl:min-h-[660px] 2xl:min-h-[831px]">
                    <div className="absolute inset-0 bg-gradient-to-br from-bpp-color-300 to-bpp-color-100/10">
                        <img src={tree} alt="tree" data-aos="fade-right" data-aos-easing="ease-in-sine"
                        className="w-[370px] md:w-[500px] lg:w-[600px] xl:w-[235px] 2xl:w-[350px] float-end mt-[14em]"
                        />
                    </div>
                    <img src={CallCenter} alt="CallCenter" data-aos="fade-up" data-aos-easing="ease-in-sine"
                         className="hidden md:block w-[250px] md:w-[300px] lg:w-[400px] xl:w-[340px] 2xl:w-[500px] ms-[1em] md:ms-[5em] 2xl:ms-[10em] object-cover object-left z-[50]"
                    />
                        <div className="absolute right-0 top-0
                            2xl:translate-x-[-15%]
                            md:translate-x-[-3%]
                            2xl:translate-y-[10%]
                            translate-y-[5%]
                            px-[1em]
                            md:px-0
                        ">
                            <Navbar services={services} products={products}/>
                            <div className="md:translate-x-[-20%] lg:translate-x-[-40%] 2xl:translate-x-[-50%]">
                                <div className="mt-[1em] flex items-center space-x-4">
                                    <img src={
                                        Logo
                                    }
                                         alt="Logo Navbar" data-aos="fade-down" data-aos-easing="ease-in-sine"
                                         className="w-[3em] md:w-[4rem] rounded-full"
                                    />
                                    <h2 data-aos="fade-left" data-aos-easing="ease-in-sine"
                                        className="
                                        text-[14px]
                                        xl:text-[20px]
                                        text-bpp-color-100
                                        font-bold
                                        font-['Moulpali']">
                                        ពោធិ៍ព្រឹក្សបាយ៍ន ស្បា និងសាឡន
                                    </h2>

                                </div>
                                <div data-aos="fade-up" data-aos-easing="ease-in-sine"
                                    className="w-full md:max-w-xl 2xl:max-w-md my-3">
                                    <p className={`text-[#ffffff] text-[16px] font-[400] text-pretty ${lang == 'kh' ? "font-['Kantumruy_Pro']": "font-['inter']"}`}>
                                        {t('footer_quote')}
                                    </p>
                                </div>
                                <div  className="w-full md:max-w-xl grid grid-cols-12 items-start justify-start gap-[1vw] my-3">
                                    <div className="col-span-12 md:col-span-6">
                                        <h2 data-aos="fade-up" data-aos-easing="ease-in-sine" className={`text-[#ffffff] text-[16px] font-[700] ${lang == 'kh' ? "font-['Kantumruy_Pro']": "font-['inter']"}`}>{t('op_hour')} : 7:30am -8:30pm</h2>
                                        <h2 data-aos="fade-up" data-aos-easing="ease-in-sine" className={`text-[#ffffff] text-[16px] font-[700] ${lang == 'kh' ? "font-['Kantumruy_Pro']": "font-['inter']"}`}>{t('date')}</h2>
                                        <h2 data-aos="fade-up" data-aos-easing="ease-in-sine" className={`text-[#ffffff] text-[16px] font-[700] ${lang == 'kh' ? "font-['Kantumruy_Pro']": "font-['inter']"}`}>076 3 9999 66</h2>

                                        <h2 data-aos="fade-up" data-aos-easing="ease-in-sine" className={`text-[#ffffff] text-[16px] font-[700] mt-[10px] ${lang == 'kh' ? "font-['Kantumruy_Pro']": "font-['inter']"}`}>{t('address')}</h2>
                                        <p data-aos="fade-up" data-aos-easing="ease-in-sine" className="text-[#ffffff] text-[16px] font-[400] text-pretty">Shop House #369D, Street 777, Borey Vimean Phnom Penh Thmey Project 598</p>

                                        <h2 data-aos="fade-up" data-aos-easing="ease-in-sine" className={`text-[#ffffff] text-[16px] font-[700] mt-[10px] ${lang == 'kh' ? "font-['Kantumruy_Pro']": "font-['inter']"}`}>{t('follow_up')}</h2>
                                        <div data-aos="fade-up" data-aos-easing="ease-in-sine" className="inline-flex items-center my-[1em] space-x-3">
                                            <span>
                                                <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M17.5 35C27.165 35 35 27.165 35 17.5C35 7.83501 27.165 0 17.5 0C7.83501 0 0 7.83501 0 17.5C0 27.165 7.83501 35 17.5 35Z" fill="white"/>
                                                    <path d="M8.00766 17.1206L24.8806 10.615C25.6637 10.3321 26.3477 10.8061 26.0939 11.9902L26.0954 11.9888L23.2224 25.5236C23.0095 26.4831 22.4393 26.7165 21.6416 26.2644L17.2666 23.04L15.1564 25.0729C14.9231 25.3063 14.7262 25.5031 14.2741 25.5031L14.5847 21.0509L22.6931 13.7256C23.046 13.415 22.6143 13.24 22.1491 13.5492L12.1289 19.8579L7.80933 18.5104C6.87162 18.2129 6.85121 17.5727 8.00766 17.1206Z" fill="#662D91"/>
                                                </svg>
                                            </span>
                                                        <span>
                                                <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M17.5 0C7.85054 0 0 7.85054 0 17.5C0 27.1488 7.85054 35 17.5 35C27.1488 35 35 27.1488 35 17.5C35 7.85054 27.1502 0 17.5 0ZM21.8521 18.1161H19.005V28.2639H14.7861C14.7861 28.2639 14.7861 22.7191 14.7861 18.1161H12.7807V14.5295H14.7861V12.2097C14.7861 10.5482 15.5756 7.95205 19.0437 7.95205L22.17 7.96403V11.4456C22.17 11.4456 20.2703 11.4456 19.9009 11.4456C19.5315 11.4456 19.0064 11.6302 19.0064 12.4226V14.5302H22.2208L21.8521 18.1161Z" fill="white"/>
                                                </svg>
                                            </span>
                                                        <span>
                                                <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M34.7929 17.6033C34.7929 7.99545 27.0043 0.206787 17.3965 0.206787C7.78866 0.206787 0 7.99545 0 17.6033C0 27.2111 7.78866 34.9997 17.3965 34.9997C27.0043 34.9997 34.7929 27.2111 34.7929 17.6033Z" fill="white"/>
                                                    <path d="M21.5168 8.448H13.2764C11.9408 8.448 10.6599 8.97856 9.71553 9.92296C8.77113 10.8674 8.24057 12.1482 8.24057 13.4838V21.7243C8.24057 23.0598 8.77113 24.3407 9.71553 25.2851C10.6599 26.2295 11.9408 26.7601 13.2764 26.7601H21.5168C22.8524 26.7601 24.1333 26.2295 25.0777 25.2851C26.0221 24.3407 26.5526 23.0598 26.5526 21.7243V13.4838C26.5526 12.1482 26.0221 10.8674 25.0777 9.92296C24.1333 8.97856 22.8524 8.448 21.5168 8.448ZM24.9503 21.0009C24.9503 22.1034 24.5124 23.1607 23.7328 23.9403C22.9533 24.7198 21.896 25.1578 20.7935 25.1578H13.9997C12.8973 25.1578 11.8399 24.7198 11.0604 23.9403C10.2808 23.1607 9.84288 22.1034 9.84288 21.0009V14.2071C9.84288 13.1047 10.2808 12.0474 11.0604 11.2678C11.8399 10.4883 12.8973 10.0503 13.9997 10.0503H20.7935C21.896 10.0503 22.9533 10.4883 23.7328 11.2678C24.5124 12.0474 24.9503 13.1047 24.9503 14.2071V21.0009Z" fill="#662D91"/>
                                                    <path d="M20.7362 14.2986L20.6927 14.2551L20.6561 14.2185C19.7906 13.356 18.6184 12.872 17.3965 12.8726C16.7795 12.8768 16.1693 13.0025 15.6009 13.2426C15.0325 13.4826 14.517 13.8323 14.0837 14.2717C13.6505 14.7111 13.3081 15.2315 13.0761 15.8033C12.8441 16.3751 12.727 16.9869 12.7315 17.6039C12.7306 18.8561 13.2242 20.0581 14.1049 20.9482C14.5363 21.3848 15.0504 21.7312 15.6171 21.967C16.1838 22.2028 16.7918 22.3233 17.4057 22.3216C18.3264 22.3023 19.2216 22.0155 19.9821 21.4961C20.7426 20.9768 21.3356 20.2473 21.6887 19.3968C22.0418 18.5462 22.1397 17.6113 21.9706 16.7061C21.8014 15.8008 21.3725 14.9643 20.7362 14.2986ZM17.3965 20.7078C16.7808 20.7165 16.1765 20.5418 15.6604 20.206C15.1443 19.8702 14.7397 19.3885 14.4981 18.8222C14.2565 18.2558 14.1887 17.6304 14.3036 17.0255C14.4184 16.4206 14.7105 15.8634 15.1428 15.425C15.5751 14.9865 16.1281 14.6866 16.7313 14.5633C17.3346 14.4399 17.9609 14.4988 18.5306 14.7324C19.1003 14.966 19.5876 15.3637 19.9306 15.8751C20.2737 16.3864 20.4569 16.9882 20.4569 17.6039C20.4599 18.0087 20.3831 18.4102 20.231 18.7853C20.0788 19.1604 19.8541 19.5018 19.5699 19.7901C19.2857 20.0783 18.9475 20.3078 18.5745 20.4652C18.2016 20.6227 17.8013 20.7051 17.3965 20.7078Z" fill="#662D91"/>
                                                    <path d="M23.4465 12.6553C23.4477 12.8022 23.42 12.9479 23.3648 13.084C23.3096 13.2201 23.2282 13.3441 23.125 13.4487C23.0219 13.5533 22.8992 13.6365 22.7638 13.6936C22.6285 13.7507 22.4832 13.7806 22.3364 13.7815C22.1907 13.7814 22.0465 13.7525 21.9121 13.6963C21.7778 13.6401 21.6559 13.5578 21.5535 13.4542C21.3984 13.2968 21.293 13.0974 21.2502 12.8807C21.2073 12.664 21.2291 12.4395 21.3127 12.235C21.3963 12.0305 21.5381 11.855 21.7204 11.7304C21.9028 11.6057 22.1178 11.5373 22.3386 11.5337C22.5972 11.5336 22.8475 11.6244 23.046 11.7901L23.0688 11.813C23.1058 11.843 23.1395 11.8767 23.1696 11.9137L23.1947 11.9411C23.3586 12.143 23.4476 12.3953 23.4465 12.6553Z" fill="#662D91"/>
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                    <div data-aos="fade-up" data-aos-easing="ease-in-sine" className="col-span-12 md:col-span-6">
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4957.854812212375!2d104.8653555759997!3d11.532219888666331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951853bf850ef%3A0x9c10aa6e388880d!2sISI%20Tower!5e1!3m2!1sen!2skh!4v1739161805094!5m2!1sen!2skh"
                                            className="w-full md:w-[350px] h-[227px] 2xl:w-[434px] 2xl:h-[267px]" loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                </section>
                <GoToTop/>
            </div>
            <div className="w-full bg-gradient-to-l from-bpp-color-300 to-bpp-color-100 py-[1em] text-center text-bpp-color-100 font-[700]">
                All right reserved 2025
            </div>
        </div>
    )
}