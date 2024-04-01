// import useState
import { useState } from "react"
// import <Link> dari react-router-dom
import { Link } from "react-router-dom"

export default function NavBar() {
    /**
     * isExpand : untuk mengambil nilai terakhir dari state
     * setIsExpand : untuk mengatur nilai dari isExpand
     * useState(false) : memberi value/nilai awal berupa false
     */
    const [isExpand, setIsExpand] = useState(false)

    /**
     * array of object dari links
     * digunakan sebagai data list rendering pada link navbar
     */
    const links = [
        {
            to: "/",
            name: "Home"
        },
        {
            to: "#",
            name: "About"
        },
        {
            to: "/product",
            name: "Product"
        },
        {
            to: "/contact",
            name: "Contact"
        }
    ]

    /**
     * function untuk handling ketika menu ditekan
     */
    const handleExpandNavbar = () => {
        // ketika function digunakan, nilai terakhir is expand dibalik
        // true menjadi false, false menjadi true
        setIsExpand(!isExpand)
    }
    return (
        <nav className="fixed top-0 w-full flex justify-between items-center bg-violet-300 px-4 sm:px-16 h-[50px]">
            {/* logo */}
            <div>
                <h1 className="text-2xl font-semibold">WebSaya</h1>
            </div>
            {/* links */}

            <div>
                <div className="block sm:hidden text-2xl" onClick={handleExpandNavbar}>
                    {/**
                     * ternary operator untuk melakukan conditional rendering berdasarkan isExpand 
                     * Jika isExpand bernilai true, maka akan merender simbol silang, 
                     * Jika isExpand bernilai false, maka akan merender simbol menu
                     */}
                    {
                        isExpand ? <ion-icon name="close-outline"></ion-icon> : <ion-icon name="menu-outline"></ion-icon>
                    }
                </div>
                {/**
                     * ternary operator untuk melakukan conditional rendering berdasarkan isExpand 
                     * Jika isExpand bernilai true, maka posisi menu menjadi top-8, 
                     * Jika isExpand bernilai false, maka posisi menu menjadi -top-[500px] sehingga keluar pandangan
                     */}
                <ul className={`absolute right-0 ${isExpand ? "top-8" : "-top-[500px]"} sm:static bg-violet-100 sm:bg-violet-300 w-full flex flex-col sm:flex-row gap-y-4 py-4 items-center justify-center gap-x-8 mt-5 sm:mt-0 sm:py-0 transition-all ease-linear duration-[500ms] sm:transition-none`}>
                    {/**
                     * list rendering pada link navbar berdasarkan array of object "links"
                     */}
                    {
                        links.map((link, i) => (
                            /**
                             * <Link to=""> sederhananya adalah versi upgrade dari <a href="">
                             * Dengan menggunakan <Link to="">, 
                             * page user tidak akan reload/refresh ketika berpindah dari satu halaman ke halaman lain 
                             */
                            <li key={i}><Link className="hover:underline text-xl" to={link.to}>{link.name}</Link></li>
                        ))
                    }
                </ul>
            </div>
        </nav>
    )
}
