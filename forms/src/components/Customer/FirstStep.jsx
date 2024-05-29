import { useState } from "react"
import { NextButton } from "../NextButton"

export function FirstStep() {
    const [error, setError] = useState("None")
    const [isProcessing, setIsProcessing] = useState(false)
    const [phoneNo, setPhoneNo] = useState("")

    const fetchPhoneDetail = async (text) => {
        try {
            const response = await fetch('https://6b7bjhjoja.execute-api.ap-south-1.amazonaws.com/ShoppeStage/customer/' + text);
            if (response.ok) {
                setError("Phone Number Already Present")
            }
            else {
                setError("Successfull")
            }
        } catch (error) {
            console.log("error");
        } finally {
            setIsProcessing(false);
        }
    }

    const Validate = (event) => {
        const { name, value } = event.target;
        setPhoneNo(value)
        console.log(value.length)
        if (value.length >= 10) {
            setIsProcessing(true)
            fetchPhoneDetail(value)
        }
    };

    return (
        <div className="flex">
            {isProcessing ?
                <div className="text-3xl font-bold w-64"> Processing...</div>
                :
                <div className="flex flex-col space-y-4">
                    <div className="space-y-2">
                        <div className="text-lg font-semibold">
                            Enter Customer's Phone Number
                        </div>
                        <div className='flex justify-center'>
                            <input
                                className='rounded-md bg-slate-950 border-2 broder-red-600 p-2 text-sky-100 w-full text-3xl placeholder-gray-500 placeholder-opacity-75'
                                placeholder=" XXX - XXXX - XXX"
                                type="number"
                                name="PhoneNo"
                                value={phoneNo}
                                onChange={Validate}
                                maxLength={10}></input>
                        </div>
                    </div>
                    <div className={`${error ? '' : 'hidden'} text-red-500`}>
                        Error: {error}
                    </div>
                </div>
            }
        </div>
    )
}