import Sidebar from "../Sidebar"

export default function AdminLayout({ children, title }) {
    return (
        <>
            <div className="flex">
                <Sidebar />
                <main className="bg-gray-100 font-maven w-full lg:ml-[300px] min-h-screen overflow-y-auto overflow-x-hidden p-10">
                    <h1 className=' font-semibold text-4xl text-blue-600 capitalize'>{title}</h1>
                    <hr className=' my-5' />
                    {children}
                </main>

            </div>
        </>
    )
}
