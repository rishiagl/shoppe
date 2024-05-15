'use client'
import { useState } from "react";

export function SideNavBar() {
    const [hideNavBar, sethideNavBar] = useState(true)

    function handleClick() {
        console.log("clicked")
        sethideNavBar(!hideNavBar)
        console.log(hideNavBar)
    }

    return (
        <div className={`lg:relative lg:translate-x-0 absolute inset-y-0 left-0 transform ${hideNavBar ? '-translate-x-60' : ''} transition duration-200 ease-in-out h-full pl-0.5 w-64 pb-0.5 rounded bg-slate-950 bg-gradient-to-r from-sky-400 via-sky-300 to-sky-400`}>
            <div className="flex flex-col justify-around h-full p-1 space-y-2 bg-slate-950 rounded">
                <div className="relative flex flex-col h-2/6 overflow-auto px-2 mt-2 bg-slate-950 space-y-2">
                    <div className="sticky top-0 font-bold mb-1 text-xl text-sky-300 bg-slate-950">
                        Process Queue
                    </div>
                    <div className="flex flex-col h-full bg-slate-950">
                        <div className="p-1 m-1 rounded border-2 border-sky-700">
                            Invoice: TI0001
                        </div>
                        <div className="p-1 m-1 rounded border-2 border-sky-700">
                            Invoice: TI0001
                        </div>
                        <div className="p-1 m-1 rounded border-2 border-sky-700">
                            Invoice: TI0001
                        </div>
                        <div className="p-1 m-1 rounded border-2 border-sky-700">
                            Invoice: TI0001
                        </div>
                        <div className="p-1 m-1 rounded border-2 border-sky-700">
                            Invoice: TI0001
                        </div>
                        <div className="p-1 m-1 rounded border-2 border-sky-700">
                            Invoice: TI0001
                        </div>
                        <div className="p-1 m-1 rounded border-2 border-sky-700">
                            Invoice: TI0001
                        </div>
                        <div className="p-1 m-1 rounded border-2 border-sky-700">
                            Invoice: TI0001
                        </div>
                        <div className="p-1 m-1 rounded border-2 border-sky-700">
                            Invoice: TI0001
                        </div>
                        <div className="p-1 m-1 rounded border-2 border-sky-700">
                            Invoice: TI0001
                        </div>
                        <div className="p-1 m-1 rounded border-2 border-sky-700">
                            Invoice: TI0001
                        </div>
                        <div className="p-1 m-1 rounded border-2 border-sky-700">
                            Invoice: TI0001
                        </div>
                        <div className="p-1 m-1 rounded border-2 border-sky-700">
                            Invoice: TI0001
                        </div>
                        <div className="p-1 m-1 rounded border-2 border-sky-700">
                            Invoice: TI0001
                        </div>
                        <div className="p-1 m-1 rounded border-2 border-sky-700">
                            Invoice: TI0001
                        </div>
                        <div className="p-1 m-1 rounded border-2 border-sky-700">
                            Invoice: TI0001
                        </div>

                    </div>
                </div>
                <div className="relative flex flex-col justify-end lg:justify-start h-4/6 overflow-auto px-2 pb-2 bg-slate-950">
                    <div className="font-bold text-xl text-sky-300 sticky top-0 mb-1 bg-slate-950">Navigation Panel</div>
                    <div className="flex flex-col p-1 space-y-1">
                        <div className="place-content-center space-y-1">
                            <div className="font-bold">
                                Masters
                            </div>
                            <div className="pl-2 w-full space-y-1">

                                <div>
                                    Customer
                                </div>

                                <div>
                                    Product Category
                                </div>

                                <div>
                                    Brand
                                </div>

                                <div>
                                    Product
                                </div>

                                <div>
                                    Tax Classification
                                </div>

                            </div>
                        </div>
                        <div className="place-content-center space-y-1">
                            <div className="font-bold">
                                Transactions
                            </div>
                            <div className="pl-2 w-full space-y-1">
                                <div>
                                    Invoice
                                </div>
                                <div>
                                    Flipkart Manifest
                                </div>
                            </div>
                        </div>
                        <div className="place-content-center space-y-1">
                            <div className="font-bold">
                                Day Book
                            </div>
                        </div>
                        <div className="place-content-center space-y-1">
                            <div className="font-bold">
                                Ledgers
                            </div>
                            <div className="pl-2 w-full space-y-1">
                                <div>
                                    Sales
                                </div>
                                <div>
                                    Product
                                </div>
                                <div>
                                    Customer
                                </div>
                                <div>
                                    Product Category
                                </div>
                                <div>
                                    Brand
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:hidden absolute bottom-4 -right-6" onClick={handleClick}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 border-r-2 rounded border-sky-500 stroke-sky-500">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                </svg>
            </div>
        </div>
    );
}