import { Link } from "react-router-dom";
import {RefObject, useEffect, useState} from "react";
import { useTranslation } from 'react-i18next';
import '../i18n';
interface navProp{
    services:RefObject<HTMLDivElement>,
    products:RefObject<HTMLDivElement>
}
export default function Navbar({services,products}:navProp){
    const {t} = useTranslation();
    const [lang, setLang] = useState<string | null>(null);
    useEffect(()=>{
        const localeEn = localStorage.getItem('i18nextLng');
        setLang(localeEn);
    });
    const scrollToSection = (elementRef: React.RefObject<HTMLDivElement>) => {
        if (elementRef.current) {
            window.scrollTo({
                top: elementRef.current.offsetTop,
                behavior: "smooth",
            });
        }
    };
    return(
        <nav data-aos="fade-right" data-aos-easing="ease-in-sine" className="hidden md:block bg-gradient-to-r from-[#ffffff] py-[5px] lg:py-[10px] px-[30px] lg:px-[50px] 2xl:px-[64px] rounded-full shadow-md shadow-gray-100/0">
            <ul className="flex items-start p-2 gap-[1vw]">
                <li>
                    <Link to="/"  className={`
                        text-[16px]
                        text-bpp-color-300
                        ${location.pathname == '/' ? 'font-[700]':'hover:font-[700]'}
                        transition-all duration-[150] ease-out-in
                        ${lang == 'kh' ? "font-['Kantumruy_Pro']": "font-['inter']"}
                        `}>
                        {t('home')}
                    </Link>
                </li>
                <li>
                    <Link to={"/#services"} onClick={()=>scrollToSection(services)}  className=
                        {`
                        text-[16px]
                        text-bpp-color-300
                        ${location.pathname == '/#services' ? 'font-[700]':'hover:font-[700]'}
                        transition-all duration-[150] ease-out-in
                        ${lang == 'kh' ? "font-['Kantumruy_Pro']": "font-['inter']"}
                        `}
                    >
                        {t('service')}
                    </Link>
                </li>
                <li>
                    <Link to={"/#products"} onClick={()=>scrollToSection(products)} className=
                        {`
                        text-[16px]
                        text-bpp-color-300
                        ${location.pathname == '/#products' ? 'font-[700]':'hover:font-[700]'}
                        transition-all duration-[150] ease-out-in
                        ${lang == 'kh' ? "font-['Kantumruy_Pro']": "font-['inter']"}
                        `}>
                        {t('product')}
                    </Link>
                </li>
                <li>
                    <Link to="/about-us" className={`
                        text-[16px]
                        text-bpp-color-300
                        ${location.pathname == '/about-us' ? 'font-[700]':'hover:font-[700]'}
                        transition-all duration-[150] ease-out-in
                        ${lang == 'kh' ? "font-['Kantumruy_Pro']": "font-['inter']"}
                        `}>
                        {t('aboutUs')}
                    </Link>
                </li>
                <li>
                    <Link to="/contact-us" className={`
                        text-[16px]
                        text-bpp-color-300
                        ${location.pathname == '/contact-us' ? 'font-[700]':'hover:font-[700]'}
                        transition-all duration-[150] ease-out-in
                        ${lang == 'kh' ? "font-['Kantumruy_Pro']": "font-['inter']"}
                        `}>
                        {t('contactUs')}
                    </Link>
                </li>
            </ul>
        </nav>
    )
}