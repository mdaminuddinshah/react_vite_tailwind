import menu from '../assets/menu_bar.png'

const Todo = () => {
    return (
        <div className="bg-white w-11/12 min-h-[550px] place-self-center p-7 flex flex-col max-w-md rounded-xl">
            
            {/* title */}
            <div
                className="flex items-center gap-2 mt-4">
                    <img src={menu} className='w-10'/>
                    <h2 className='text-lg font-semibold'>Todo-List</h2>
            </div>

            {/* input box */}
            <div className='flex items-center bg-gray-200 rounded-full'>
                <input className=' bg-transparent border-0 outline-none h-14 pl-6 pr-2 placeholder:text-slate-600 flex-1' type='text' placeholder='Add your task'/>
                <button className='border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer'>Add +</button>
            </div>
        </div>
    )
}

export default Todo