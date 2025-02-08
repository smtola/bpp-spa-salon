import {Link} from "react-router-dom";

export default function Navbar(){
    return(
        <nav className="hidden md:block bg-gradient-to-r from-[#ffffff] py-[5px] lg:py-[10px] px-[30px] lg:px-[50px] 2xl:px-[64px] rounded-full shadow-md shadow-gray-100/0">
            <ul className="flex items-center justify-center space-x-[1.2em] xl:space-x-[2em]">
                <li>
                    <Link to="#" className=" text-[12px] lg:text-[16px]
                                    text-bpp-color-300
                                     hover:font-bold text-[16px]
                                     transition-all duration-[150] ease-out-in
                                     ">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="#" className=" text-[12px] lg:text-[16px]
                                    text-bpp-color-300
                                     hover:font-bold text-[16px]
                                     transition-all duration-[150] ease-out-in
                                     ">
                        Services
                    </Link>
                </li>
                <li>
                    <Link to="#" className=" text-[12px] lg:text-[16px]
                                    text-bpp-color-300
                                     hover:font-bold text-[16px]
                                     transition-all duration-[150] ease-out-in
                                     ">
                        Products
                    </Link>
                </li>
                <li>
                    <Link to="#" className=" text-[12px] lg:text-[16px]
                                    text-bpp-color-300
                                     hover:font-bold text-[16px]
                                     transition-all duration-[150] ease-out-in
                                     ">
                        About Us
                    </Link>
                </li>
                <li>
                    <Link to="#" className=" text-[12px] lg:text-[16px]
                                    text-bpp-color-300
                                     hover:font-bold text-[16px]
                                     transition-all duration-[150] ease-out-in
                                     ">
                        Contact Us
                    </Link>
                </li>
            </ul>
        </nav>
    )
}