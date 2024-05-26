export function Product() {

    return (
        <div className="flex flex-col p-10 font-bold justify-center w-full space-y-10">
          <div className='flex font-serif text-sky-200 opacity-90 font-bold text-4xl justify-center'>
            Product
          </div>
          <div className='flex justify-center'>
            <input className='rounded-md bg-slate-950 border-2 broder-red-600 p-2 text-sky-100'></input>
          </div>
          <div className='flex flex-col space-y-4'>
          <div className='flex justify-center'>
            <button className='bg-sky-700 p-2 px-4 rounded-md shadow-md'>Submit</button>
          </div>
          <div className='flex justify-center'>
            <button className='p-2 px-6 rounded-md shadow-md border-2 border-sky-700 opacity-75'>Clear</button>
          </div>
          </div>
        </div>
    )
}