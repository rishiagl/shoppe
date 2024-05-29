export function ProgressBar({ step }) {
    const percentage = ((step / 3) * 100).toFixed()
    return (
        <div className="flex flex-col space-y-1">
            <div className="flex flex-row justify-between">
                <div>
                    Progress
                </div>
                <div>
                    <p>{percentage}%</p>
                </div>
            </div>
            <div className="w-full rounded-full h-2 bg-gray-700">
                <div className="bg-blue-600 h-2 rounded-full" style={{ "width": `${percentage}%` }}></div>
            </div>
        </div>
    )
}