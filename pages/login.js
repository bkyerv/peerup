export  default function Login(){
    return <div>
        <form className='py-2 px-4 h-64 bg-gray-50 text-gray-600 flex flex-col gap-2 items-center justify-start rounded-md shadow-sm'>
            <div className='w-72 mt-8 '>
                <label className='text-sm'>Email</label>
                <br />
                <input className='w-64 my-1 p-1 rounded-md border' type='email'/>
            </div>
            <div className='w-72'>
                <label className='text-sm'>Password</label>
                <br />
                <input className='w-64 my-1 p-1 rounded-md border ' type='password' />
            </div>
            <button className='py-2 px-4 bg-blue-800 text-gray-50 rounded-md'>Login</button>
        </form></div>
}