import { Route } from 'wouter'
import customerIcon from '../assets/customer.png'
import productIcon from '../assets/product.png'
import homeIcon from "../assets/home.png" 
import { useState } from 'react'
import { Link } from "wouter"

export function NavWidget() {
    const [widget, setWidget] = useState(false)

    function handleClick() {
        console.log("clicked")
        setWidget(!widget)
    }

    return (
        <div>
            <div className={`${widget ? '' : '-translate-x-64'} absolute left-4 bottom-4 flex flex-col border-y-2 border-l-2 border-sky-500 rounded-md bg-slate-950 transform transition duration-500 ease-in-out`}>
                <div className='flex border-b-2 border-r-2 border-sky-500 p-2 rounded-md'>
                    My Choice Shoppe - Forms
                </div>
                <div className='flex flex-row justify-center p-4 space-x-6'>
                    <div className=''>
                        <Link href='/' onClick={handleClick}>
                            <img src={homeIcon} className='w-8 h-8'></img>
                        </Link>
                    </div>
                    <div className=''>
                        <Link href='/customer' onClick={handleClick}>
                            <img src={customerIcon} className='w-8 h-8'></img>
                        </Link>
                    </div>
                    <div className=''>
                        <Link href='/product' onClick={handleClick}>
                            <img src={productIcon} className='w-8 h-8'></img>
                        </Link>
                    </div>
                </div>
                <div className="absolute bottom-4 -right-6" onClick={handleClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 border-r-2 rounded border-sky-500 stroke-sky-500">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                    </svg>
                </div>
            </div>
            <div className={`${widget ? '-translate-x-24' : ''} absolute bottom-4 left-4 transform transition duration-500 ease-in-out`} onClick={handleClick}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 border-2 rounded border-sky-500 stroke-sky-500">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                </svg>
            </div>
        </div>
    )
}