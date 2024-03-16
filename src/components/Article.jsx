/**
 * *Komponen Article
 * *Menerima props : judul, konten, warnaKonten 
 */
const Article = ({ judul, konten, warnaKonten }) => {
    return (
        <header>
            <h1 className="font-bold text-xl text-blue-700">
                {/* menggunakan props judul */}
                {judul}
            </h1>
            {/* menggunakan props warnaKonten*/}
            <p className={`font-medium text-lg ${warnaKonten}`}>
                {/* menggunakan props konten*/}
                {konten}
            </p>
        </header>
    )
}

/**
 * Melakukan export pada component Article,
 * agar bisa dipakai komponen/halaman lain
 */
export default Article