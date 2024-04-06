import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Sidebar() {

    const navigate = useNavigate()
    const [expand, setExpand] = useState(false)

    return (
        <aside className={` font-maven absolute lg:fixed top-0 bottom-0 lg:left-0 z-10 ${expand ? " " : "left-[-300px] "} duration-1000`}>
            <span className={`absolute ${expand ? "hidden" : ""}  lg:hidden text-white text-2xl top-5 -right-8  cursor-pointer`} onClick={() => { setExpand(!expand) }}>
                <i className=" px-2 bg-blue-600 rounded-md">
                    <ion-icon name="menu-outline"></ion-icon>
                </i>
            </span>
            <div className=" p-2 w-[300px] overflow-y-auto text-center bg-white shadow h-screen">
                <div className="text-gray-100 text-xl">
                    <div className="p-2.5 mt-1 flex items-center rounded-md ">
                        <div className="px-3 py-1 pt-2 bg-blue-600 rounded-md">
                            <ion-icon name="storefront-outline"></ion-icon>
                        </div>
                        <h1 className="text-[15px]  ml-3 text-xl text-blue-500 font-bold">Admin</h1>
                        <div className="ml-28 cursor-pointer text-gray-900 lg:hidden" onClick={() => { setExpand(!expand) }}>
                            <ion-icon name="close-outline"></ion-icon>
                        </div>
                    </div>
                    <hr className="my-2 text-gray-900" />
                    <div>
                        <div className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer text-gray-600 hover:text-white  hover:bg-blue-600" onClick={() => navigate("/admin/user")}>
                            <ion-icon name="people-outline"></ion-icon>
                            <span className="text-[15px] ml-4">User</span>
                        </div>
                        <div className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer text-gray-600 hover:text-white hover:bg-blue-600" onClick={() => navigate("/admin/product")}>
                            <ion-icon name="basket-outline"></ion-icon>
                            <span className="text-[15px] ml-4">Product</span>
                        </div>
                    </div>
                    <hr className="my-2 text-gray-900" />
                </div>
            </div>
        </aside>
    )
}



