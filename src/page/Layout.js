import Index from './Index'

const Layout = ({children}) => {
    return (
        <>
            <Index/>
            <div className='bg-white my-5 w-full flex flex-col space-y-1
                md:flex-row md:space-x-1 md:space-y-0'>
                <main className='bg-sky-300 md:w-4/5 px-5 py-5'>
                    {children}
                </main>
                <aside className='bg-green-300 md:w-1/5 px-5 py-5'>
                    SIDEBAR
                </aside>
            </div>
        </>
    )
}

export default Layout