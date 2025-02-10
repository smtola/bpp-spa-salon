import KHM from '../assets/images/product.png'
export default function Product() {
    return(
        <div className="w-full h-fit bg-gradient-to-br from-[#ffffff] via-bpp-color-100 to-[#ffffff] pt-10 pb-[6em] px-3">
        <h2 className="text-start text-bpp-color-300 text-[16px] md:text-[18px] xl:text-[22px] font-bold xl:ms-[10em] mb-[2em]">Our Products</h2>
        <div className="max-w-screen-lg mx-auto grid grid-cols-12 items-center justify-center gap-[2vw] lg:gap-[1vw]">
            <div className="col-span-6 md:col-span-4 lg:col-span-3 h-full bg-[#ffffff] rounded-[12px] p-2 overflow-hidden transition-all duration-[150]">
                <div className="bg-bpp-color-100/30 rounded-[12px]">
                    <img src={KHM} alt="product" className="w-full h-full object-center object-center p-1"/>
                </div>
                <div className="flex flex-col">
                    <div>
                        <div className="inline-flex items-end space-x-2">
                            <h2 className="text-bpp-color-300 text-[14px] md:text-[18px] font-bold">RESTORE</h2>
                            <h3 className="text-bpp-color-300 text-[12px] md:text-[14px] font-bold">Premium</h3>
                        </div>
                        <h2 className="text-bpp-color-300 text-[14px] md:text-[16px] font-bold">KERATIN HAIR MASK</h2>
                        <p className="text-bpp-color-300 text-[11px] md:text-[12px] font-bold text-pretty">Made with 100% Organic Ingredients</p>
                    </div>
                    <div className="w-full inline-flex justify-between items-end space-x-[2.5em] md:space-x-[4em] space-y-[10px]">
                        <h2 className="text-bpp-color-300 font-bold bg-bpp-color-100/40 rounded-full px-[14px] py-[1px]">
                            $35
                        </h2>
                        <button className="w-full bg-bpp-color-300 py-[2px] px-[16px] rounded-full text-[#ffffff] hover:bg-bpp-color-200 transition-all duration-[150]">
                            Buy
                        </button>
                    </div>
                </div>
            </div>

            <div className="col-span-6 md:col-span-4 lg:col-span-3 h-full bg-[#ffffff] rounded-[12px] p-2 overflow-hidden transition-all duration-[150]">
                <div className="bg-bpp-color-100/30 rounded-[12px]">
                    <img src={KHM} alt="product" className="w-full h-full object-center object-center p-1"/>
                </div>
                <div className="flex flex-col">
                    <div>
                        <div className="inline-flex justify-center items-end space-x-2">
                            <h2 className="text-bpp-color-300 text-[14px] md:text-[18px] font-bold">RESTORE</h2>
                            <h3 className="text-bpp-color-300 text-[12px] md:text-[14px] font-bold">Premium</h3>
                        </div>
                        <h2 className="text-bpp-color-300 text-[14px] md:text-[16px] font-bold">HAIR SHAMPOO</h2>
                        <p className="text-bpp-color-300 text-[11px] md:text-[12px] font-bold text-pretty">Made with 100% Organic Ingredients</p>
                    </div>
                    <div className="w-full inline-flex justify-between items-end space-x-[2.5em] md:space-x-[4em] space-y-[10px]">
                        <h2 className="text-bpp-color-300 font-bold bg-bpp-color-100/40 rounded-full px-[14px] py-[1px]">
                            $32
                        </h2>
                        <button className="w-full bg-bpp-color-300 py-[2px] px-[16px] rounded-full text-[#ffffff] hover:bg-bpp-color-200 transition-all duration-[150]">
                            Buy
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}