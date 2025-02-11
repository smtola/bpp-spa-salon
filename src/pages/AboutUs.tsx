import Navigations from "../components/Navigations";
import banner_1 from "../assets/images/sub_banner.png";
import banner_2 from "../assets/images/sub_banner_2.png";
import Navbar from "../components/Navbar";
import quoteImg from "../assets/images/footer_banner.png";
import cert from "../assets/images/Cert_2.png";
import pin from "../assets/images/pin.png";
import Footer from "../components/Footer";
import '../components/Aboutus.css';
import {useRef} from "react";
import GoToTop from "../components/GoToTop";
import Scroll from "../components/Scroll";
export default function AboutUs(){
    const services = useRef<HTMLDivElement>(null);
    const products = useRef<HTMLDivElement>(null);
    return(
        <div className="scroll-smooth">
            <Scroll />
            <Navigations services={services} products={products}/>
            <div>
                {/* Header Section*/}
                <header className="relative flex flex-col justify-end items-center overflow-hidden min-h-[230px] md:min-h-[440px] xl:min-h-[600px] 2xl:min-h-[850px]">
                    <div>
                        <img src={banner_1} alt="banner"
                             className="hidden lg:block absolute inset-0 w-full object-contain object-center"
                        />
                        <img src={banner_2} alt="banner"
                             className="lg:hidden block absolute inset-0 w-full object-contain object-center"
                        />
                    </div>
                    <div className="absolute right-0 top-0
                        2xl:translate-x-[-15%]
                        translate-x-[-3%]
                        2xl:translate-y-[5%]
                        translate-y-[5%]
                    ">
                        <Navbar  services={services} products={products}/>
                        <div className="translate-x-[10%] lg:translate-x-0">
                            <ul className="mt-[2px]md:mt-[1em] space-y-1 md:space-y-2 md:mt-[.5em]">
                                <li data-aos="fade-down" data-aos-easing="ease-in-sine" className="flex flex-col justify-center about-list group hover:bg-bpp-color-300/80 md:hover:bg-bpp-color-300 transition-all duration-[150] ease-out-in rounded-l-full rounded-r-0 lg:rounded-full py-[2px] md:py-0">
                                    <div className="inline-flex space-x-[1em] justify-start items-start my-[1px] md:my-[5px] xl:my-[9px] 2xl:my-[2em] ps-[2em] 2xl:ps-[1em]">
                                        <span className="group-hover:!text-bpp-color-100 transition-all duration-[150] ease-out-in">
                                            <svg className="icon w-[16px] h-[16px] md:w-[20px] md:h-[20px] xl:w-[32px] h-[24px] xl:h-[32px] 2xl:w-[44px] 2xl:h-[44px]" viewBox="0 0 46 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M35.5567 24.1513C35.5567 24.2138 35.6069 24.264 35.6694 24.264C35.7319 24.264 35.7821 24.2138 35.7821 24.1513C35.7821 24.0888 35.7319 24.0386 35.6694 24.0386C35.6069 24.0386 35.5567 24.0888 35.5567 24.1513Z" fill="#662D91" stroke="#662D91" strokeWidth="2"/>
                                                <path d="M9.64764 24.1513C9.64764 24.2138 9.69785 24.264 9.76034 24.264C9.82284 24.264 9.87305 24.2138 9.87305 24.1513C9.87305 24.0888 9.82284 24.0386 9.76034 24.0386C9.69785 24.0386 9.64764 24.0888 9.64764 24.1513Z" fill="#662D91" stroke="#662D91" strokeWidth="2"/>
                                                <path d="M18.6333 29.4749C18.6333 34.3754 14.6609 38.3479 9.76031 38.3479C4.85976 38.3479 0.887329 34.3754 0.887329 29.4749C0.887329 28.4075 1.07544 27.3853 1.42059 26.4377C1.64774 25.8148 1.94233 25.2256 2.29458 24.6773C3.87397 22.2257 6.62726 20.6019 9.76031 20.6019C14.6609 20.6019 18.6333 24.5743 18.6333 29.4749Z" stroke="#662D91" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M13.1063 25.3367C14.3121 26.3137 15.084 27.8061 15.084 29.4751C15.084 32.4112 12.6963 34.7989 9.76025 34.7989" stroke="#662D91" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M43.1351 24.6775C43.4874 25.2258 43.7819 25.815 44.0092 26.4379C44.3542 27.3855 44.5424 28.4077 44.5424 29.4751C44.5424 34.3756 40.57 38.3481 35.6694 38.3481C30.7688 38.3481 26.7964 34.3756 26.7964 29.4751C26.7964 24.5746 30.7688 20.6021 35.6694 20.6021C38.8024 20.6021 41.5557 22.2259 43.1351 24.6775Z" stroke="#662D91" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M39.0163 25.3323C39.4529 25.6863 39.8371 26.1114 40.1521 26.6003C40.3641 26.9303 40.5398 27.2844 40.6729 27.649C40.8859 28.2338 40.9932 28.846 40.9932 29.4751C40.9932 32.4112 38.6055 34.7989 35.6694 34.7989" stroke="#662D91" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M26.7964 9.95454V11.7291V16.1656V22.3767V25.9259V29.4751" stroke="#662D91" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M43.1351 24.6775L37.1912 11.5748L34.9658 6.668C34.3296 5.68044 33.3118 4.96173 32.1202 4.72038C31.8336 4.66182 31.5363 4.63076 31.2329 4.63076C28.783 4.63076 26.7964 6.61742 26.7964 9.06725" stroke="#662D91" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M18.6333 9.06725C18.6333 6.61742 16.6466 4.63076 14.1968 4.63076C13.8933 4.63076 13.5961 4.66182 13.3095 4.72038C12.1178 4.96173 11.1001 5.68044 10.4639 6.668L8.23857 11.5748L2.29456 24.6775" stroke="#662D91" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M18.6333 29.4751V25.9259V22.3767V16.1656V11.7291V9.95454" stroke="#662D91" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M18.6333 25.9259H26.7964" stroke="#662D91" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M18.6333 22.3767H26.7964" stroke="#662D91" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M18.6333 11.7291H26.7964" stroke="#662D91" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M26.7964 9.95453V9.06723V3.74344C26.7964 2.27319 27.988 1.08155 29.4583 1.08155C30.9285 1.08155 32.1202 2.27319 32.1202 3.74344V4.71947" stroke="#662D91" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M13.3096 4.71947V3.74344C13.3096 2.27319 14.5012 1.08155 15.9715 1.08155C17.4417 1.08155 18.6334 2.27319 18.6334 3.74344V9.06723V9.95453" stroke="#662D91" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M26.7964 16.1656C26.7964 12.7353 29.5772 9.95453 33.0075 9.95453C34.6188 9.95453 36.0873 10.5685 37.1911 11.5747" stroke="#662D91" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M8.23865 11.5747C9.34245 10.5685 10.8109 9.95453 12.4223 9.95453C15.8526 9.95453 18.6333 12.7353 18.6333 16.1656" stroke="#662D91" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </span>
                                        <div className="flex flex-col items-start w-[220px] md:w-[320px] lg:w-[400px] ">
                                            <h2 className="text-[14px] md:text-[18px] xl:text-[20px] 2xl:text-[24px] text-bpp-color-300 font-[700] leading-[12px] md:leading-[24px] group-hover:!text-bpp-color-100 transition-all duration-[150] ease-out-in">Vision</h2>
                                            <p className="text-[8px] text-[#000] md:text-[11px] xl:text-[14px] font-[400] leading-[12px] md:leading-[24px] group-hover:!text-bpp-color-100 transition-all duration-[150] ease-out-in pe-[4em] md:pe-0">
                                                Our vision is to provide the best services, making every client feel special, confident, and beautiful.
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li data-aos="fade-down" data-aos-easing="ease-in-sine" className="flex flex-col justify-center about-list group hover:bg-bpp-color-300/80 md:hover:bg-bpp-color-300 transition-all duration-[150] ease-out-in rounded-l-full rounded-r-0 lg:rounded-full py-[2px] md:py-0">
                                    <div className="inline-flex space-x-[1em] justify-start items-start my-[1px] md:my-[5px] xl:my-[9px] 2xl:my-[2em] ps-[2em] 2xl:ps-[1em]">
                                        <span className="group-hover:!text-bpp-color-100 transition-all duration-[150] ease-out-in">
                                           <svg className="icon w-[16px] h-[16px] md:w-[20px] md:h-[20px] xl:w-[32px] h-[24px] xl:h-[32px] 2xl:w-[44px] 2xl:h-[44px]" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M23.0005 37.8833V44.5153" stroke="#662D91" strokeWidth="2" strokeMiterlimit="22.9256" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M33.7319 39.6333H12.269V44.999H33.7319V39.6333Z" stroke="#662D91" strokeWidth="2" strokeMiterlimit="22.9256" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M8.26908 23.35L4.07898 16.4924C2.7684 14.4323 0.311618 16.0134 1.184 17.8732C1.7947 19.1406 4.21536 25.1694 6.03336 29.1685C7.34099 32.0451 7.86888 32.7826 10.1772 34.8808L13.6863 38.0704V39.1329M37.7316 23.35L41.9217 16.4924C43.2323 14.4323 45.6891 16.0134 44.8167 17.8732C44.206 19.1406 41.7854 25.1694 39.9674 29.1685C38.6596 32.0451 38.1318 32.7826 35.8235 34.8808L32.3144 38.0704V39.1329M11.1855 30.6115C10.2074 29.033 9.21255 26.9803 8.41824 24.9729C8.11535 24.2074 7.99668 23.3811 8.64521 22.8361C9.29357 22.2911 10.2525 22.3608 10.7761 22.991C11.2779 23.5949 14.2485 27.329 14.7502 27.9328C17.5189 31.2651 22.4566 32.2032 23.0004 37.8834C23.5442 32.2032 28.4819 31.2652 31.2506 27.9328C31.7523 27.329 34.7229 23.595 35.2247 22.991C35.7483 22.3608 36.7071 22.2911 37.3556 22.8361C38.004 23.3811 37.8855 24.2074 37.5826 24.9729C36.7882 26.9803 35.7933 29.033 34.8153 30.6115" stroke="#662D91" strokeWidth="2" strokeMiterlimit="22.9256" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M23.0005 24.567C29.1016 24.567 34.0476 19.6211 34.0476 13.52C34.0476 7.41889 29.1016 2.47296 23.0005 2.47296C16.8994 2.47296 11.9535 7.41889 11.9535 13.52C11.9535 19.6211 16.8994 24.567 23.0005 24.567Z" stroke="#662D91" strokeWidth="2" strokeMiterlimit="22.9256" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M23.6522 20.1162C27.2949 19.7557 29.9557 16.5103 29.5951 12.8675C29.2345 9.22478 25.9892 6.56405 22.3464 6.92463C18.7037 7.28521 16.0429 10.5306 16.4035 14.1733C16.7641 17.8161 20.0094 20.4768 23.6522 20.1162Z" stroke="#662D91" strokeWidth="2" strokeMiterlimit="22.9256" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M23.0004 15.7294C24.2207 15.7294 25.2099 14.7402 25.2099 13.52C25.2099 12.2998 24.2207 11.3106 23.0004 11.3106C21.7802 11.3106 20.791 12.2998 20.791 13.52C20.791 14.7402 21.7802 15.7294 23.0004 15.7294Z" stroke="#662D91" strokeWidth="2" strokeMiterlimit="22.9256" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M23.0005 1V6.52348" stroke="#662D91" strokeWidth="2" strokeMiterlimit="22.9256" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M10.4805 13.52H16.0039" stroke="#662D91" strokeWidth="2" strokeMiterlimit="22.9256" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M23.0005 26.04V20.5165" stroke="#662D91" strokeWidth="2" strokeMiterlimit="22.9256" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M35.5205 13.52H29.9969" stroke="#662D91" strokeWidth="2" strokeMiterlimit="22.9256" strokeLinecap="round" strokeLinejoin="round"/>
                                           </svg>
                                        </span>
                                        <div className="flex flex-col items-start w-[220px] md:w-[320px] lg:w-[400px] ">
                                            <h2 className="text-[14px] md:text-[18px] xl:text-[20px] 2xl:text-[24px] text-bpp-color-300 font-[700] leading-[12px] md:leading-[24px] group-hover:!text-bpp-color-100 transition-all duration-[150] ease-out-in">Mission Statement</h2>
                                            <p className="text-[8px] text-[#000] md:text-[11px] xl:text-[14px] font-[400] leading-[12px] md:leading-[24px] group-hover:!text-bpp-color-100 transition-all duration-[150] ease-out-in pe-[4em] md:pe-0">
                                                To empower women by offering exceptional beauty and spa services that help them look and feel their best, no matter how busy life gets.
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li data-aos="fade-down" data-aos-easing="ease-in-sine" className="flex flex-col justify-center about-list group hover:bg-bpp-color-300/80 md:hover:bg-bpp-color-300 transition-all duration-[150] ease-out-in rounded-l-full rounded-r-0 lg:rounded-full py-[2px] md:py-0">
                                    <div className="inline-flex space-x-[1em] justify-start items-start my-[1px] md:my-[5px] xl:my-[9px] 2xl:my-[2em] ps-[2em] 2xl:ps-[1.5em]">
                                        <span className="group-hover:!text-bpp-color-100 transition-all duration-[150] ease-out-in">
                                           <svg className="icon w-[16px] h-[16px] md:w-[20px] md:h-[20px] xl:w-[32px] h-[24px] xl:h-[32px] 2xl:w-[44px] 2xl:h-[44px]" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M27.5289 22.8703L32.486 17.9132C33.3597 17.0396 33.8504 15.8548 33.8504 14.6194V5.20181C33.8504 3.91541 34.8933 2.87265 36.1796 2.87265C37.4659 2.87265 38.5088 3.91541 38.5088 5.20181V17.9186C38.5088 19.7348 37.872 21.4937 36.7093 22.8889L30.7449 30.0462V33.9281H19.8755V27.1527C19.8755 25.0937 20.6934 23.1189 22.1493 21.6629L28.9097 14.9021C29.8192 13.9926 31.2938 13.9925 32.2034 14.902C33.113 15.8115 33.1131 17.2863 32.2036 18.1958L27.529 22.8707" stroke="#662D91" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M12.222 22.8703L7.26493 17.9132C6.39126 17.0396 5.90051 15.8548 5.90051 14.6194V5.20181C5.90051 3.91541 4.85766 2.87265 3.57135 2.87265C2.28503 2.87265 1.24219 3.91541 1.24219 5.20181V17.9186C1.24219 19.7348 1.8789 21.4937 3.0417 22.8889L9.00605 30.0462V33.9281H19.8755V27.1527C19.8755 25.0937 19.0575 23.1189 17.6017 21.6629L10.8413 14.9021C9.93174 13.9926 8.45715 13.9925 7.54753 14.902C6.63792 15.8115 6.63784 17.2863 7.54738 18.1958L12.2219 22.8707" stroke="#662D91" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M32.2977 38.5864H19.8755V33.9281H32.2977V38.5864Z" stroke="#662D91" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M19.8754 38.5864H7.45325V33.9281H19.8754V38.5864Z" stroke="#662D91" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M19.8755 3.46153L18.7074 2.29346C17.2022 0.788278 14.7619 0.788278 13.2566 2.29346C11.7514 3.79872 11.7514 6.23905 13.2566 7.74431L19.8755 14.3632L26.4943 7.74431C27.9996 6.23905 27.9996 3.79872 26.4943 2.29346C24.9891 0.788278 22.5487 0.788278 21.0436 2.29346L19.8755 3.46153Z" stroke="#662D91" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                           </svg>
                                        </span>
                                        <div className="flex flex-col items-start w-[220px] md:w-[400px] xl:w-[220px] ">
                                            <h2 className="text-[14px] md:text-[18px] xl:text-[20px] 2xl:text-[24px] text-bpp-color-300 font-[700] leading-[12px] md:leading-[24px] group-hover:!text-bpp-color-100 transition-all duration-[150] ease-out-in">Core Values</h2>
                                            <ul className="flex items-center text-[#000] flex-wrap gap-[10px] xl:gap-[12px] my-2 text-[8px] md:text-[11px] xl:text-[14px] font-[400] group-hover:!text-bpp-color-100 transition-all duration-[150] ease-out-in">
                                                <li>
                                                    Passion
                                                </li>
                                                <li>
                                                    Creativity
                                                </li>
                                                <li>
                                                    Dream
                                                </li>
                                                <li>
                                                    Unique
                                                </li>
                                                <li>
                                                    Lifelong Learning
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </header>
                {/* Business Registration Section*/}
                <section className="bg-[#ffffff] w-full h-full overflow-hidden">
                    <div className="w-full max-w-screen-lg mx-auto flex flex-wrap items-center justify-center">
                        <div data-aos="fade-right" data-aos-easing="ease-in-sine">
                            <h2 className="text-center md:text-start text-bpp-color-300 text-[24px] md:text-[30px] font-[700] leading-[30px] w-[270px] md:w-[400px]">
                                Business Registration
                                Certificate
                            </h2>
                        </div>
                        <div data-aos="fade-left" data-aos-easing="ease-in-sine">
                            <img src={cert} alt="br"
                                 className="w-[600px] h-full object-center object-contain"
                            />
                        </div>
                    </div>
                </section>
                {/* Pin Section*/}
                <section className="bg-gradient-to-br from-bpp-color-300 to-bpp-color-200 overflow-hidden">
                    <div className="w-full max-w-screen-xl mx-auto grid grid-cols-12 items-center xl:justify-center h-full md:min-h-screen px-3 py-[1.5em] md:py-0">
                        <div data-aos="fade-right" data-aos-easing="ease-in-sine" className="col-span-12 xl:col-span-3">
                            <h2 className="text-center xl:text-start text-[#ffffff] text-[24px] md:text-[34px] xl:text-[30px] font-[700] xl:leading-[30px] xl:w-[270px]">
                                Future
                                Business Plan
                            </h2>
                            <p className="text-center xl:text-start text-[#ffffff] text-[16px] md:text-[16px] xl:text-[14px] font-[400] xl:leading-[30px]">
                                Our plan is to scale our operations and open branches in 25 provinces nationwide.
                            </p>
                        </div>
                        <div data-aos="fade-left" data-aos-easing="ease-in-sine" className="col-span-12 xl:col-span-9">
                            <img src={pin} alt="PIN"
                                 className="w-full h-full object-center object-contain"
                            />
                        </div>
                    </div>
                </section>
                {/* Banner Section*/}
                <section className="overflow-hidden">
                    <div className="relative flex flex-col justify-center items-center min-h-[489px] overflow-hidden">
                        <img src={quoteImg} alt="Quote"
                             className="absolute inset-0 w-full h-full object-center object-cover"/>
                        <div className="absolute inset-0 bg-gradient-to-br from-[#ffffff]/70 via-bpp-color-100/80 to-[#ffffff]/40"></div>
                        <div className="relative">
                            <h1 data-aos="fade-left" data-aos-easing="ease-in-sine" className="text-bpp-color-300 font-[400] text-[40px] md:text-[80px] lg:text-[120px] leading-[40px]">Your Beauty, Our Passion</h1>
                        </div>
                    </div>
                </section>
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