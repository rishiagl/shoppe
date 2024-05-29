import { useState } from "react"
import { ProgressBar } from "../components/ProgressBar"
import { FirstStep } from "../components/Customer/FirstStep"

export function CustomerPage() {
    const [step, setStep] = useState(1)

    return (
        <div className="flex flex-col p-10 w-full justify-around">

            <div className='flex font-serif font-bold text-sky-200 opacity-90 text-4xl justify-center'>
                Customer Form
            </div>
            <div className="flex justify-center">
                <div className="flex flex-col space-y-8 rounded-lg border-2 border-sky-400 px-4 py-8 max-w-96">
                    <ProgressBar step={step} />
                    <FirstStep />
                </div>
            </div>
            {/* <div className="flex justify-center">
                <div className="flex flex-col w-full max-w-96 rounded-md border-2 max-h-76 p-2 border-sky-400 justify-center">
                    <div className="flex font-bold border-b-2 p-1 justify-center border-sky-400">
                        Note:
                    </div>
                    <div className="p-1">
                        A Unique Phone Number is required for each customer, It acts as his/her unique identity and would be required for user login.
                    </div>
                </div>
            </div> */}
        </div>
    )
}