const DelModal = ({close, del}) => {
    return (
        <div className='fixed top-0 z-[1500] left-0 h-full w-full
            justify-center bg-black bg-opacity-20'
            onClick={close}>
            <div className='absolute bg-white shadow dark:bg-gray-700
                opacity-100 w-1/4 rounded ml-52 mt-28 px-6 min-w-80'>
                <div className='text-2xl border-orange-400 border-b-4 pt-4 pb-4'>
                    want to delete?
                </div>
                <div className='justify-end flex'>
                    <button className='rounded bg-blue-500 mt-4 mb-4 px-6 pt-4
                        pb-4 text-white mr-3'
                        onClick={close}>NO</button>
                    <button className='rounded bg-red-500 mt-4 mb-4 px-6 pt-4
                        pb-4 text-white'
                        onClick={del}>YES</button>
                </div>
            </div>
        </div>
    )
}

export default DelModal