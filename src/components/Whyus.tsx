import { useTranslation } from 'react-i18next';
import '../i18n';
export default function WhyUs() {
    const {t} = useTranslation();
    return(
        <section className="bg-bpp-color-300 p-0 overflow-hidden">
            <h2 data-aos="fade-up"
                className="text-start text-[#ffffff] text-[18px] xl:text-[22px] font-bold mt-[3em] ms-[1em] md:ms-[9em] lg:ms-[14em] 2xl:ms-[10em] mb-[1em]"
            >{t('why_choose_us')}</h2>
            <div className="
            h-full
            w-full
            flex
            flex-col
            justify-center
            items-center
            max-w-screen-2xl
            mx-auto
            mb-[3em]
            px-3
            ">
                <div className="hidden xl:block overflow-hidden">
                    <div className="flex flex-wrap lg:justify-center items-center my-[1em] space-y-[1em] ">
                        <div data-aos="fade-left"
                            className="inline-flex space-x-4">
                            <h2
                                className="
                            text-[54px] 2xl:text-[60px]
                            font-[300]
                            leading-[24px]
                            text-bpp-color-100
                            mt-[10px]
                            "
                            >01</h2>
                            <span className="w-[3px] bg-bpp-color-100"></span>
                            <div className="w-[300px] 2xl:w-[400px]">
                                <h2 className="
                            text-[18px] 2xl:text-[20px]
                            font-[400]
                            leading-[24px]
                            text-bpp-color-100
                            ">{t('al')}</h2>
                                <p className="
                            text-[14px] 2xl:text-[18px]
                            font-[400]
                            leading-[24px]
                            text-bpp-color-100
                            text-pretty
                            ">{t('al_detail')}</p>
                            </div>
                        </div>
                        <div data-aos="fade-right"  className="inline-flex space-x-4">
                            <h2
                                className="
                            text-[54px] 2xl:text-[60px]
                            font-[300]
                            leading-[24px]
                            text-bpp-color-100
                            mt-[10px]
                            "
                            >02</h2>
                            <span className="w-[3px] bg-bpp-color-100"></span>
                            <div className="w-[300px] 2xl:w-[400px]">
                                <h2 className="
                            text-[18px] 2xl:text-[20px]
                            font-[400]
                            leading-[24px]
                            text-bpp-color-100
                            ">{t('es')}</h2>
                                <p className="
                            text-[14px] 2xl:text-[18px]
                            font-[400]
                            leading-[24px]
                            text-bpp-color-100
                            text-pretty
                            ">{t('es_detail')}</p>
                            </div>
                        </div>
                        <div data-aos="fade-left"
                            className="inline-flex space-x-4">
                            <h2
                                className="
                            text-[54px] 2xl:text-[60px]
                            font-[300]
                            leading-[24px]
                            text-bpp-color-100
                            mt-[10px]
                            "
                            >03</h2>
                            <span className="w-[3px] bg-bpp-color-100"></span>
                            <div className="w-[300px] 2xl:w-[400px]">
                                <h2 className="
                            text-[18px] 2xl:text-[20px]
                            font-[400]
                            leading-[24px]
                            text-bpp-color-100
                            ">{t('pqp')}</h2>
                                <p className="
                            text-[14px] 2xl:text-[18px]
                            font-[400]
                            leading-[24px]
                            text-bpp-color-100
                            text-pretty
                            ">{t('pqp_detail')}</p>
                            </div>
                        </div>
                        <div data-aos="fade-right"  className="inline-flex space-x-4">
                            <h2
                                className="
                            text-[54px] 2xl:text-[60px]
                            font-[300]
                            leading-[24px]
                            text-bpp-color-100
                            mt-[10px]
                            "
                            >04</h2>
                            <span className="w-[3px] bg-bpp-color-100"></span>
                            <div className="w-[300px] 2xl:w-[400px]">
                                <h2 className="
                            text-[18px] 2xl:text-[20px]
                            font-[400]
                            leading-[24px]
                            text-bpp-color-100
                            ">{t('ifa')}</h2>
                                <p className="
                            text-[14px] 2xl:text-[18px]
                            font-[400]
                            leading-[24px]
                            text-bpp-color-100
                            text-pretty
                            ">{t('ifa_detail')}</p>
                            </div>
                        </div>
                        <div data-aos="fade-left"
                            className="inline-flex space-x-4">
                            <h2
                                className="
                            text-[54px] 2xl:text-[60px]
                            font-[300]
                            leading-[24px]
                            text-bpp-color-100
                            mt-[10px]
                            "
                            >05</h2>
                            <span className="w-[3px] bg-bpp-color-100"></span>
                            <div className="w-[300px] 2xl:w-[400px]">
                                <h2 className="
                            text-[18px] 2xl:text-[20px]
                            font-[400]
                            leading-[24px]
                            text-bpp-color-100
                            ">{t('exp_twapt')}</h2>
                                <p className="
                            text-[14px] 2xl:text-[18px]
                            font-[400]
                            leading-[24px]
                            text-bpp-color-100
                            text-pretty
                            ">{t('exp_twapt_detail')}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="overflow-hidden">
                    <div className="xl:hidden flex flex-col justify-center items-start my-[1em] space-y-[3em]">
                            <div className="inline-flex space-x-4">
                                <h2
                                    className="
                                text-[44px] md:text-[54px]
                                font-[300]
                                leading-[24px]
                                text-bpp-color-100
                                mt-[10px]
                                "
                                >01</h2>
                                <span className="w-[3px] bg-bpp-color-100"></span>
                                <div className="w-[280px] md:w-[400px]">
                                    <h2 className="
                                text-[16px] md:text-[18px]
                                font-[400]
                                leading-[24px]
                                text-bpp-color-100
                                ">{t('al')}</h2>
                                    <p className="
                                text-[12px] md:text-[16px]
                                font-[400]
                                leading-[24px]
                                text-bpp-color-100
                                text-pretty
                                ">{t('al_detail')}</p>
                                </div>
                            </div>
                            <div className="inline-flex">
                                <h2
                                    className="
                                text-[44px] md:text-[54px]
                                font-[300]
                                leading-[24px]
                                text-bpp-color-100
                                mt-[10px]
                                order-last
                                "
                                >02</h2>
                                <span className="w-[3px] bg-bpp-color-100 order-2 mx-3"></span>
                                <div className="w-[280px] md:w-[400px]">
                                    <h2 className="
                                text-[16px] md:text-[18px]
                                font-[400]
                                leading-[24px]
                                text-bpp-color-100
                                text-end
                                ">{t('es')}</h2>
                                    <p className="
                                text-[12px] md:text-[16px]
                                font-[400]
                                leading-[24px]
                                text-bpp-color-100
                                text-pretty
                                text-end
                                ">{t('es_detail')}</p>
                                </div>
                            </div>
                            <div className="inline-flex space-x-4">
                                <h2
                                    className="
                                text-[44px] md:text-[54px]
                                font-[300]
                                leading-[24px]
                                text-bpp-color-100
                                mt-[10px]
                                "
                                >03</h2>
                                <span className="w-[3px] bg-bpp-color-100"></span>
                                <div className="w-[280px] md:w-[400px]">
                                    <h2 className="
                                text-[16px] md:text-[18px]
                                font-[400]
                                leading-[24px]
                                text-bpp-color-100
                                ">{t('pqp')}</h2>
                                    <p className="
                                text-[12px] md:text-[16px]
                                font-[400]
                                leading-[24px]
                                text-bpp-color-100
                                text-pretty
                                ">{t('pqp_detail')}</p>
                                </div>
                            </div>
                            <div className="inline-flex">
                                <h2
                                    className="
                                text-[44px] md:text-[54px]
                                font-[300]
                                leading-[24px]
                                text-bpp-color-100
                                mt-[10px]
                                order-last
                                "
                                >04</h2>
                                <span className="w-[3px] bg-bpp-color-100 w-[3px] bg-bpp-color-100 order-2 mx-3"></span>
                                <div className="w-[280px] md:w-[400px]">
                                    <h2 className="
                                text-[16px] md:text-[18px]
                                font-[400]
                                leading-[24px]
                                text-bpp-color-100
                                text-end
                                ">{t('ifa')}</h2>
                                    <p className="
                                text-[12px] md:text-[16px]
                                font-[400]
                                leading-[24px]
                                text-bpp-color-100
                                text-pretty
                                text-end
                                ">{t('ifa_detail')}</p>
                                </div>
                            </div>
                            <div className="inline-flex space-x-4">
                                <h2
                                    className="
                                text-[44px] md:text-[54px]
                                font-[300]
                                leading-[24px]
                                text-bpp-color-100
                                mt-[10px]
                                "
                                >05</h2>
                                <span className="w-[3px] bg-bpp-color-100"></span>
                                <div className="w-[280px] md:w-[400px]">
                                    <h2 className="
                                text-[16px] md:text-[18px]
                                font-[400]
                                leading-[24px]
                                text-bpp-color-100
                                ">{t('exp_twapt')}</h2>
                                    <p className="
                                text-[12px] md:text-[16px]
                                font-[400]
                                leading-[24px]
                                text-bpp-color-100
                                text-pretty
                                ">{t('exp_twapt_detail')}</p>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </section>
    )
}