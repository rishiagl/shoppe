export function ProgressBar({step}) {
    return (
        <div className="flex flex-col space-y-1">
        <div className="flex flex-row justify-between">
            <div>
                Progress
            </div>
            <div>
                <p>{((step/3) * 100).toFixed()}%</p>
            </div>
        </div>
        <div className="w-full rounded-full h-2 bg-gray-700">
            <div className={`bg-blue-600 h-2 rounded-full ${step ? `w-${step}/3`: 'hidden'}`}></div>
        </div>
    </div>
    )
}