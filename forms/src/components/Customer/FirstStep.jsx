import { useState } from "react"
import { NextButton } from "../NextButton"

export function FirstStep() {
    const [error, setError] = useState("Mobile Number already Registered")
    return (
        <div className="flex flex-col space-y-4">
            <div className="space-y-2">
                <div className="text-lg font-semibold">
                    Phone Number
                </div>
                <div className='flex justify-center'>
                    <input className='rounded-md bg-slate-950 border-2 broder-red-600 p-2 text-sky-100 w-full text-3xl'></input>
                </div>
            </div>
            <div className={`${error ? '' : 'hidden'} text-red-500`}>
                Error: {error}
            </div>
            <div className='flex flex-row space-x-4 justify-center'>
                <div className='flex justify-center'>
                    <button className='p-2 px-6 rounded-md shadow-md border-2 border-sky-700 opacity-75'>Clear</button>
                </div>
                <NextButton />
            </div>
        </div>
    )
}