import Navigations from "../components/Navigations";
import banner_1 from "../assets/images/banner_1.png";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Product from "../components/Product";
import WhyUs from "../components/Whyus";
import quoteImg from "../assets/images/footer_banner.png";
import Footer from "../components/Footer";
import {useRef} from "react";
export default function Home(){
    const services = useRef<HTMLDivElement>(null);
    const products = useRef<HTMLDivElement>(null);
    return(
        <div className="scroll-smooth">
            <Navigations services={services} products={products}/>
            <div>
                {/* Header Section*/}
                <header className="relative flex flex-col justify-end items-center overflow-hidden min-h-[38vh] md:min-h-[45vh] lg:min-h-[48vh] xl:min-h-screen">
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
                        <div className="md:translate-x-[12.5%] xl:translate-x-0">
                            <h1 className="text-[18px] md:text-[28px] lg:text-[38px] xl:text-[48px] text-bpp-color-300 text-center mt-[.5em] xl:mt-[1em] 2xl:mt-[1.4em] md:leading-[67px]">Welcome to</h1>
                            <h2 className="text-[20px] md:text-[30px] lg:text-[40px] xl:text-[50px] text-bpp-color-300 text-center leading-[1px] font-bold">
                                BPP Spa & Salon
                            </h2>
                            <h1 className="text-[14px] md:text-[20px] lg:text-[30px] xl:text-[40px] text-bpp-color-300 text-center mt-[1.4em] leading-[1px]">Your Beauty, Our Passion</h1>
                        </div>
                    </div>
                    <div className="relative w-full xl:max-w-[140vh] md:max-w-[64vh] md:px-0 px-3">
                        <h2 className="text-bpp-color-300  font-bold text-[20px] md:text-[24px]">
                            BPP Spa and Salon
                        </h2>
                        <p className="text-[10px] md:text-[11px] lg:text-[16px]">
                            was founded in early 2025 by a passionate Cambodian woman entrepreneur. Recognizing the challenges modern women face—juggling work, family, and personal care—the owner envisioned a sanctuary where women could feel beautiful and rejuvenated despite their busy lives. At BPP Spa and Salon, we offer exceptional services from head to toe, including hair, eyes, facial, armpit, nail, and body spa treatments. Conveniently located in a shop house at Borey Vimean Phnom Penh 598 project, we are your go-to destination for beauty and relaxation.
                        </p>
                    </div>
                </header>
                {/* Services Section*/}
                <section ref={services} className="mt-[3em] p-0 overflow-hidden">
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
                            <h1 className="text-bpp-color-300 font-[400] text-[40px] md:text-[80px] lg:text-[120px] leading-[40px]">Your Beauty, Our Passion</h1>
                        </div>
                    </div>
                </section >
                {/* Footer Section*/}
                <Footer />
            </div>
            <div className="w-full bg-[#ffffff] py-[1em] text-center text-bpp-color-300 font-[700]">
                All right reserved 2025
            </div>
        </div>
    )
}