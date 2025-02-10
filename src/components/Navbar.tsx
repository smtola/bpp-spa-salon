import {NavLink} from "react-router-dom";
import { Link } from "react-router-dom";
import {RefObject} from "react";

interface navProp{
    services:RefObject<HTMLDivElement>,
    products:RefObject<HTMLDivElement>
}
export default function Navbar({services,products}:navProp){
    const scrollToSection = (elementRef: React.RefObject<HTMLDivElement>) => {
        if (elementRef.current) {
            window.scrollTo({
                top: elementRef.current.offsetTop,
                behavior: "smooth",
            });
        }
    };
    return(
        <nav className="hidden md:block bg-gradient-to-r from-[#ffffff] py-[5px] lg:py-[10px] px-[30px] lg:px-[50px] 2xl:px-[64px] rounded-full shadow-md shadow-gray-100/0">
            <ul className="flex flex-col items-start p-2 gap-[1vw]">
                <li>
                    <Link to="/"  className="text-[20px]
                                    text-[#ffffff]
                                     hover:font-bold
                                     transition-all duration-[150] ease-out-in
                                     ">
                        Home
                    </Link>
                </li>
                <li>
                    <NavLink to={"/#services"} onClick={()=>scrollToSection(services)}  className=" text-[12px] lg:text-[16px]
                                    text-[#ffffff]
                                     hover:font-bold text-[20px]
                                     transition-all duration-[150] ease-out-in
                                     ">
                        Services
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/#products"} onClick={()=>scrollToSection(products)} className=" text-[12px] lg:text-[16px]
                                    text-[#ffffff]
                                     hover:font-bold text-[20px]
                                     transition-all duration-[150] ease-out-in
                                     ">
                        Products
                    </NavLink>
                </li>
                <li>
                    <Link to="/about-us" className="text-[16px]
                                    text-[#ffffff]
                                     hover:font-bold text-[20px]
                                     transition-all duration-[150] ease-out-in
                                     ">
                        About Us
                    </Link>
                </li>
                <li>
                    <Link to="/contact-us" className="text-[16px]
                                    text-[#ffffff]
                                     hover:font-bold text-[20px]
                                     transition-all duration-[150] ease-out-in
                                     ">
                        Contact Us
                    </Link>
                </li>
            </ul>
        </nav>
    )
}