import Navigations from "../components/Navigations";
import banner_1 from "../assets/images/banner_1.png";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
export default function Home(){
    return(
        <div className="scroll-smooth">
            <Navigations />
            <div>
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
                        <Navbar />
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
                <Products/>
            </div>
        </div>
    )
}