import { useState } from 'react';
import { pricing } from '../../content/content';
import { checkMark } from '../../assets/index';

const PricingTable = () => {
    const [isAnnual, setIsAnnual] = useState(true);

    return (
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
            <div className="flex justify-center max-w-[14rem] m-auto mb-8 lg:mb-16">
                <div className="relative flex w-full p-1 bg-white dark:bg-slate-900 rounded-full">
                    <span className="absolute inset-0 m-1 pointer-events-none" aria-hidden="true">
                        <span
                            className={`absolute inset-0 w-1/2 bg-indigo-500 rounded-full shadow-sm shadow-indigo-950/10 transform transition-transform duration-150 ease-in-out ${isAnnual ? 'translate-x-0' : 'translate-x-full'
                                }`}
                        ></span>
                    </span>
                    <button
                        className={`relative flex-1 text-sm font-medium h-8 rounded-full focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 ease-in-out ${isAnnual ? 'text-white' : 'text-slate-500 dark:text-slate-400'
                            }`}
                        onClick={() => setIsAnnual(true)}
                        aria-pressed={isAnnual}
                    >
                        Yearly <span className={isAnnual ? 'text-indigo-200' : 'text-slate-400 dark:text-slate-500'}>-20%</span>
                    </button>
                    <button
                        className={`relative flex-1 text-sm font-medium h-8 rounded-full focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 ease-in-out ${isAnnual ? 'text-slate-500 dark:text-slate-400' : 'text-white'
                            }`}
                        onClick={() => setIsAnnual(false)}
                        aria-pressed={!isAnnual}
                    >
                        Monthly
                    </button>
                </div>
            </div>

            <div className="max-w-sm mx-auto grid gap-6 lg:grid-cols-3 items-start lg:max-w-none">

                {
                    pricing.map((pricing, i) => {
                        return <div className="h-full" key={i}>
                            <div className="relative flex flex-col h-full p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-900 shadow shadow-slate-950/5">

                                {pricing.isPopular ? <div className="absolute top-0 right-0 mr-6 -mt-4">
                                    <div className="inline-flex items-center text-xs font-semibold py-1.5 px-3 bg-emerald-500 text-white rounded-full shadow-sm shadow-slate-950/5">
                                        Most Popular
                                    </div>
                                </div> : null}
                                <div className="mb-5">
                                    <div className="text-slate-900 dark:text-slate-200 font-semibold mb-1">{pricing.title}</div>
                                    <div className="inline-flex items-baseline mb-2 text-slate-900 dark:text-slate-200 font-bold">
                                        <span className=" text-3xl">$</span>
                                        <span className="text-4xl">{isAnnual ? pricing.annuallyPrice : pricing.monthlyPrice}</span>
                                        <span className="text-slate-500 font-medium">/mo</span>
                                    </div>
                                    <div className="text-sm text-slate-500 mb-5">
                                        There are many variations available, but the majority have suffered.
                                    </div>
                                    <a
                                        className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-indigo-500 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150"
                                        href="#0"
                                    >
                                        Purchase Plan
                                    </a>
                                </div>
                                <div className="text-slate-900 dark:text-slate-200 font-medium mb-3">Includes:</div>
                                <ul className="text-slate-600 dark:text-slate-400 text-sm space-y-3 grow">

                                    {pricing.Includes.map((include, i) => (
                                        <li className="flex items-center" key={i}>
                                            <img src={checkMark} alt="checkmark-icon" className='w-3 h-3 mr-3' />
                                            <span>{include}</span>
                                        </li>
                                    ))}


                                </ul>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default PricingTable;
