import Navigations from "../components/Navigations";
import banner_1 from "../assets/images/banner_1.png";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Product from "../components/Product";
import WhyUs from "../components/Whyus";
import quoteImg from "../assets/images/footer_banner.png";
import Footer from "../components/Footer";
import {useEffect, useRef, useState} from "react";
import GoToTop from "../components/GoToTop";
import Scroll from "../components/Scroll";
import "./Home.css";
import { useTranslation } from 'react-i18next';
import '../i18n';
export default function Home(){
    const services = useRef<HTMLDivElement>(null);
    const products = useRef<HTMLDivElement>(null);
    const {t} = useTranslation();
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
                <header className="res-mb relative flex flex-col justify-end items-center overflow-hidden min-h-[50vh] md:min-h-[45vh] lg:min-h-[48vh] xl:min-h-[88vh] 2xl:min-h-screen">
                    <div>
                        <img src={banner_1} alt="banner"
                             className="absolute inset-0 w-full object-contain object-center"
                        />
                    </div>
                    <div className="absolute right-0 top-0
                        2xl:translate-x-[-15%]
                        translate-x-[-3%]
                        2xl:translate-y-[20%]
                        translate-y-[5%]
                    ">
                        <Navbar services={services} products={products}/>
                        <div className="translate-x-[-6%] md:translate-x-[12.5%] xl:translate-x-0">
                            <h1
                                className={` text-bpp-color-300 text-center mt-[.5em] xl:mt-[1em] 2xl:mt-[1.4em] md:leading-[67px] ${lang == 'kh' ? "font-['Kantumruy_Pro']  text-wrap text-[12px] md:text-[17px] lg:text-[24px]": "font-['Italianno'] text-[12px] md:text-[17px] lg:text-[50px] text-wrap"}`}>{t('welcome')}</h1>
                            <h2
                                className={`text-[16px] md:text-[30px] lg:text-[40px] xl:text-[50px] text-bpp-color-300 text-center leading-[1px] font-bold ${lang == 'kh' ? "font-['Kantumruy_Pro']": "font-['inter']"}`}>
                                {t('company_name')}
                            </h2>
                            <h1
                                className={`text-[14px] md:text-[20px] lg:text-[30px] xl:text-[40px] text-bpp-color-300 text-center mt-[1.4em] leading-[1px]`}>{t('quote')}</h1>
                        </div>
                    </div>
                    <div
                        className="relative flex flex-col justify-end w-full max-w-screen-xl h-full px-3 mx-auto">
                        <h2 data-aos="fade-right"
                            data-aos-easing="ease-in-sine"
                            className={`text-bpp-color-300  font-bold text-[16px] md:text-[24px] ${lang == 'kh' ? "font-['Kantumruy_Pro']": "font-['inter']"}`}>
                            {t('company_name')}
                        </h2>
                        <p data-aos="fade-left"
                           data-aos-easing="ease-in-sine"
                            className={`text-[12px] md:text-[11px] lg:text-[16px] text-[#000] ${lang == 'kh' ? "font-['Kantumruy_Pro']": "font-['inter']"}`}>
                            {t('detail_1')}
                        </p>
                    </div>
                </header>
                {/* Services Section*/}
                <section ref={services} className="mt-[1em] md:mt-[3em] p-0 overflow-hidden">
                    <Services/>
                </section>
                {/* Our Products Section*/}
                <section ref={products} className="m-0 -0">
                    <Product />
                </section>
                {/*Why Choose Us Section*/}
                <WhyUs />
                {/* Banner Section*/}
                <section  className="overflow-hidden">
                    <div className="relative flex flex-col justify-center items-center min-h-[489px] overflow-hidden">
                        <img src={quoteImg} alt="Quote"
                             className="absolute inset-0 w-full h-full object-center object-cover"/>
                        <div className="absolute inset-0 bg-gradient-to-br from-[#ffffff]/70 via-bpp-color-100/80 to-[#ffffff]/40"></div>
                        <div className="relative">
                            <h1 data-aos="fade-right" data-aos-easing="ease-in-sine" className={`text-bpp-color-300 font-[400] leading-[40px] text-[40px] md:text-[80px] lg:text-[120px]`}>{t('quote')}</h1>
                        </div>
                    </div>
                </section >
                {/* Footer Section*/}
                <Footer />
                <GoToTop/>
            </div>
            <div className="w-full bg-[#ffffff] py-[1em] text-center text-bpp-color-300 font-[700]">
                All right reserved 2025
            </div>
        </div>
    )
}