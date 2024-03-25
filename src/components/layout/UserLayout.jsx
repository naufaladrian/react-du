import NavBar from "../NavBar"
import Footer from "../Footer"
export default function UserLayout({ children }) {
    return (
        <>
            <NavBar />
            <main className=" min-h-dvh mt-[50px] px-4 sm:px-16">
                {children}
            </main>
            <Footer />
        </>
    )
}
