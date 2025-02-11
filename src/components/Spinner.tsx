
const Spinner = () => {
    return (
        <div className="z-[999999] flex justify-center items-center bg-[#ffffff] fixed w-full top-0 bottom-0 left-0 right-0">
            <div className="flex flex-col items-center">
                <div className="w-12 h-12 border-4 border-bpp-color-300 border-dashed rounded-full animate-spin"></div>
                <h2 className="
                text-[12px]
                lg:text-[14px]
                xl:text-[20px]
                text-bpp-color-300
                font-bold
                my-6
                font-['Moulpali']">
                    ពោធិ៍ព្រឹក្សបាយ៍ន ស្បា និងសាឡន
                </h2>
            </div>
        </div>
    );
};

export default Spinner;
