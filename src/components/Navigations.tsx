import Logo from '../assets/images/logo_white.png';
export default function Navigations(){
    return(
        <header
            className="
            hidden
            md:grid
            grid-cols-12
            justify-center
            items-center
            py-3
            shadow-bpp-color-100/80
            shadow-2xl
            ">
            <div className="col-span-6 flex items-center space-x-[.5em]">
                <img src={
                    Logo
                }
                     alt="Logo Navbar"
                     className="w-[4rem] ms-[4em] rounded-full"
                />
                <h2 className="
                text-[18px]
                xl:text-[20px]
                text-bpp-color-300
                font-bold
                font-['Moulpali']">
                    ពោធិ៍ព្រឹក្សបាយ៍ន ស្បា និងសាឡន
                </h2>
            </div>
            <div className="col-span-6 flex items-center space-x-[2em]">
                <ul className="flex items-center space-x-4 !text-bpp-color-300">
                    <li className="
                            flex
                            items-center
                            gap-1
                            ">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" width="24" height="24" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" stroke="currentColor">
                              <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                              <path d="M12 12l3 -2"></path>
                              <path d="M12 7v5"></path>
                            </svg>
                        </span>
                        <p className="text-[16px]">
                            Operation Hour : 7:30am - 8:30pm  Mon - Sun
                        </p>
                    </li>
                    <li className="
                            flex
                            items-center
                            gap-1
                            ">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width="24" height="24" strokeWidth="1">
                              <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                            </svg>
                        </span>
                        <p className="text-[16px]">
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
                </ul>
            </div>
        </header>
    )
}