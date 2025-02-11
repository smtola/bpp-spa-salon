import Logo from '../assets/images/logo_white.png';
import { Link, useLocation } from "react-router-dom";
import {RefObject, useEffect, useState} from "react";
import { useTranslation } from 'react-i18next';
import '../i18n';
interface navProp{
    services:RefObject<HTMLDivElement>,
    products:RefObject<HTMLDivElement>
}
export default function Navigations({services,products}:navProp){
    const [closeNav, isCloseNav] = useState<boolean>(true);
    const location = useLocation();
    const { i18n, t } = useTranslation();
    const [lang, setLang] = useState<string | null>('kh');
    useEffect(()=>{
        const localeEn = localStorage.getItem('i18nextLng');
        setLang(localeEn);
    });
    const triggerKhClick = (value:string) => {
        i18n.changeLanguage(value);
    };

    const triggerEnClick = (value:string) => {
        i18n.changeLanguage(value);
    };
    const handleOpenNav = () => {
        isCloseNav(false);
    }
    const handleCloseNav = () => {
         isCloseNav(true);
        }

    const scrollToSection = (elementRef: React.RefObject<HTMLDivElement>) => {
        if (elementRef.current) {
            window.scrollTo({
                top: elementRef.current.offsetTop,
                behavior: "smooth",
            });
        }
    };
    return(
        <header
            className="
            flex
            md:grid
            md:grid-cols-12
            md:justify-center
            md:items-center
            justify-between
            items-center
            py-3
            px-3
            shadow-bpp-color-100/80
            shadow-2xl
            gap-2
            ">
            <div className="md:col-span-4 lg:col-span-4 2xl:col-span-6 flex items-center space-x-[.5em]">
                <Link to="/">
                    <img src={
                        Logo
                    }
                         alt="Logo Navbar"
                         className="w-[3em] xl:w-[4rem] rounded-full"
                    />
                </Link>
                <h2 className="
                text-[12px]
                lg:text-[14px]
                xl:text-[20px]
                text-bpp-color-300
                font-bold
                font-['Moulpali']">
                    ពោធិ៍ព្រឹក្សបាយ៍ន ស្បា និងសាឡន
                </h2>
            </div>
            <div className="hidden md:flex md:col-span-8 lg:col-span-8 2xl:col-span-6 justify-end xl:justify-center items-center space-x-[.5em] xl:space-x-[1em] 2xl:space-x-[2em] pe-2 xl:pe-0">
                <ul className="flex flex-wrap justify-start lg:flex-nowrap lg:items-center lg:space-x-4 !text-bpp-color-300">
                    <li className="
                            flex
                            items-center
                            gap-1
                            ">
                        <span>
                            <svg className="w-[20px] h-[20px] xl:w-[24px] xl:h-[24px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" stroke="currentColor">
                              <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                              <path d="M12 12l3 -2"></path>
                              <path d="M12 7v5"></path>
                            </svg>
                        </span>
                        <p className="text-[12px] xl:text-[16px]">
                            Operation Hour : 7:30am - 8:30pm  Mon - Sun
                        </p>
                    </li>
                    <li className="
                            flex
                            items-center
                            gap-1
                            ">
                        <span>
                            <svg className="w-[20px] h-[20px] xl:w-[24px] xl:h-[24px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1">
                              <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                            </svg>
                        </span>
                        <p className="text-[12px] xl:text-[16px]">
                            076 3 9999 66
                        </p>
                    </li>
                </ul>
                <ul className="flex items-center space-x-[.5em]">
                    <li className="bg-bpp-color-300 rounded-full p-[5px] hover:shadow-bpp-color-200 hover:shadow-sm hover:scale-[1.09] transition-all duration-[150] ease-out-in">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" width="16" height="16" strokeWidth="1">
                              <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4"></path>
                            </svg>
                        </span>
                    </li>
                    <li className="bg-bpp-color-300 rounded-full p-[5px] hover:shadow-bpp-color-200 hover:shadow-sm hover:scale-[1.09] transition-all duration-[150] ease-out-in">
                        <span>
                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" width="16" height="16" strokeWidth="1">
                              <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path>
                            </svg>
                        </span>
                    </li>
                    <li className="bg-bpp-color-300 rounded-full p-[5px] hover:shadow-bpp-color-200 hover:shadow-sm hover:scale-[1.09] transition-all duration-[150] ease-out-in">
                        <span className="bg-bpp-color-300 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" width="16" height="16" strokeWidth="1">
                              <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path>
                              <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                              <path d="M16.5 7.5l0 .01"></path>
                            </svg>
                        </span>
                    </li>
                    <li>
                        <div className="border-2 border-bpp-color-300 w-full rounded-full flex">
                            <button onClick={()=>triggerKhClick('kh')} className={`text-center rounded-full transition-all duration-[150] font-['Kantumruy_Pro'] ${lang == 'kh' ? 'bg-bpp-color-300  px-4 py-1 text-[#ffffff]': 'px-2 py-1 text-bpp-color-300'}`}>ខ្មែរ</button>
                            <button onClick={()=>triggerEnClick('en')} className={`text-center rounded-full transition-all duration-[150] ${lang == 'en' ? 'bg-bpp-color-300  px-4 py-1 text-[#ffffff]': 'px-2 py-1 text-bpp-color-300'}`}>EN</button>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="md:hidden flex justify-end items-center gap-2">
                <div className="border-2 border-bpp-color-300 w-full rounded-full flex">
                    <button onClick={()=>triggerKhClick('kh')} className={`text-center rounded-full transition-all duration-[150] font-['Kantumruy_Pro'] ${lang == 'kh' ? 'bg-bpp-color-300  px-4 py-1 text-[#ffffff]': 'px-2 py-1 text-bpp-color-300'}`}>ខ្មែរ</button>
                    <button onClick={()=>triggerEnClick('en')} className={`text-center rounded-full transition-all duration-[150] ${lang == 'en' ? 'bg-bpp-color-300  px-4 py-1 text-[#ffffff]': 'px-2 py-1 text-bpp-color-300'}`}>EN</button>
                </div>
                <button onClick={handleOpenNav}>
                    <svg width="30" height="26" viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="30" height="3.90909" rx="1.95455" fill="#662D91"/>
                        <rect y="10.75" width="30" height="3.90909" rx="1.95455" fill="#662D91"/>
                        <rect y="21.5" width="30" height="3.90909" rx="1.95455" fill="#662D91"/>
                    </svg>
                </button>
                <div className={closeNav === true ? "fixed inset-0 translate-x-[100%] bg-gradient-to-br from-bpp-color-300 via-bpp-color-100 to-bpp-color-100 z-[50] rounded-l-[12px] transition-all duration-[300]" :"fixed inset-0 translate-x-[14%] bg-gradient-to-br from-bpp-color-300 via-bpp-color-100 to-bpp-color-100 z-[50] rounded-l-[12px] transition-all duration-[300]"}>
                        <button onClick={handleCloseNav} className="m-2 p-3 hover:bg-bpp-color-200/20 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#F3DCFF" strokeLinecap="round" strokeLinejoin="round" width="24" height="24" strokeWidth="1.75">
                                <path d="M18 6l-12 12"></path>
                                <path d="M6 6l12 12"></path>
                            </svg>
                        </button>
                    <hr className="border-bpp-color-100 "/>
                    <div>
                        <ul className="flex flex-col items-start pt-3 ps-4 gap-[5vw]">
                            <li>
                                <Link to="/"  className={`text-[20px]
                                    text-[#ffffff]
                                    ${location.pathname == '/' ? 'font-[700]':'hover:font-[700]'}
                                    transition-all duration-[150] ease-out-in
                                    ${lang == 'kh' ? "font-['Kantumruy_Pro']": "font-['inter']"}
                                    `}>
                                    {t('home')}
                                </Link>
                            </li>
                            <li>
                                <Link to="/#services" onClick={()=>scrollToSection(services)}  className={`text-[20px]
                                    text-[#ffffff]
                                    ${location.pathname == '/#services' ? 'font-[700]':'hover:font-[700]'}
                                    transition-all duration-[150] ease-out-in
                                    ${lang == 'kh' ? "font-['Kantumruy_Pro']": "font-['inter']"}
                                    `}>
                                    {t('service')}
                                </Link>
                            </li>
                            <li>
                                <Link to="/#products" onClick={()=>scrollToSection(products)} className={`text-[20px]
                                    text-[#ffffff]
                                    ${location.pathname == '/#products' ? 'font-[700]':'hover:font-[700]'}
                                    transition-all duration-[150] ease-out-in
                                    ${lang == 'kh' ? "font-['Kantumruy_Pro']": "font-['inter']"}
                                    `}>
                                    {t('product')}
                                </Link>
                            </li>
                            <li>
                                <Link to="/about-us" className={`
                                    text-[#ffffff]
                                    ${location.pathname == '/about-us' ? 'font-[700]':'hover:font-[700]'} text-[20px]
                                    transition-all duration-[150] ease-out-in
                                    ${lang == 'kh' ? "font-['Kantumruy_Pro']": "font-['inter']"}
                                    `}>
                                    {t('aboutUs')}
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact-us" className={`
                                    text-[#ffffff]
                                    ${location.pathname == '/contact-us' ? 'font-[700]':'hover:font-[700]'} text-[20px]
                                    transition-all duration-[150] ease-out-in
                                    ${lang == 'kh' ? "font-['Kantumruy_Pro']": "font-['inter']"}
                                    `}>
                                    {t('contactUs')}
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}