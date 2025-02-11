import { useEffect, useState } from "react";

const GoToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            onClick={scrollToTop}
            data-tip="Go To Top"
            className={`tooltip tooltip-bpp-color-300 fixed bottom-5 right-5 p-3 bg-gradient-to-br from-bpp-color-300 rounded-full shadow-xl transition-opacity ${isVisible ? "opacity-100" : "opacity-0"}`}
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#F3DCFF" strokeLinecap="round" strokeLinejoin="round" width="24" height="24" strokeWidth="2">
                <path d="M12 5l0 14"></path>
                <path d="M16 9l-4 -4"></path>
                <path d="M8 9l4 -4"></path>
            </svg>
        </button>
    );
};

export default GoToTop;
