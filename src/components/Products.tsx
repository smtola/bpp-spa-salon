// Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import FacialDetoxSpa from '../assets/images/facial_detox_spa.png';
export default function Products() {
    return(
        <section className="mt-[3em] p-0 overflow-hidden">
            <div className="min-h-[72vh] md:min-h-[70vh] lg:min-h-[59vh] xl:min-h-screen w-full bg-gradient-to-r from-bpp-color-300 to-bpp-color-100 ">
                <div className="max-w-screen-lg 2xl:max-w-screen-xl mx-auto px-3 md:px-5 py-5">
                    <div className="flex items-center space-x-[6.5em] xl:space-x-[14em] 2xl:space-x-[22em] md:pt-[2em] 2xl:pt-[3em] ">
                        <h2 className="font-bold text-[24px] md:text-[32px] text-[#ffffff]">Our Services</h2>
                        <h2 className="font-light text-[14px] md:text-[18px] text-[#ffffff]">Facial Treatment</h2>
                    </div>
                    <div className="relative mt-[2em]">
                        {/* Pagination Positioned on Top */}
                        <div className="absolute top-0 left-0 right-0">
                            <div id="custom-pagination"
                                 className="swiper-pagination">
                            </div>
                        </div>

                        <Swiper
                            slidesPerView={2} // 4 columns
                            grid={{ rows: 2, fill: 'row' }} // 2 rows
                            spaceBetween={18}
                            pagination={{
                                el:"#custom-pagination",
                                clickable: true,
                            }}
                            navigation={true} // Enable navigation
                            modules={[Grid, Pagination, Navigation]}
                            breakpoints={{
                                640: {
                                    slidesPerView: 2,
                                },
                                768: {
                                    slidesPerView: 3,
                                },
                                1024: {
                                    slidesPerView: 4,
                                },
                            }}
                            className="mySwiper " // Add padding-top for pagination space
                        >
                            {Array.from({ length: 10 }).map((_, index) => (
                                <SwiperSlide key={index} >
                                    <div className="bg-[#ffffff] rounded-[20px]">
                                        <div>
                                            <img src={FacialDetoxSpa} alt={`Product ${index + 1}`}
                                                 className="w-full object-cover object-center rounded-[12px] p-2"
                                            />
                                        </div>
                                        <div className="px-2 pb-3">
                                            <h2 className="text-[18px] text-bpp-color-300 font-medium my-2">
                                                Product {index + 1}
                                            </h2>
                                            <button className="bg-bpp-color-300 text-[#ffffff] py-[2px] px-[17px] rounded-full">
                                                Book Now
                                            </button>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}