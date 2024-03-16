/**
 * *import components
 */
import Article from './components/Article'
import Komponen from './components/Komponen'


/**
 ini variable konstan nama
 */
const nama = "Naufal"

function App() {

  return (
    <>
      { /**
       * *Menggunakan component yang telah diimport
       */}
      {/*Mengirim Props judul, konten, dan warnaKonten ke component article*/}
      <Article judul="Doscom University" konten={"ini isi konten dari artikel ini"} warnaKonten={"text-lime-400	"} />
      <Article judul="Ini Judul" />
      <Komponen />

      <p className=' font-bold'>Hello World</p>
      <h1>{5 + 5}</h1>
      <h1>10</h1>
      <p>nama saya {nama}</p>

    </>
  )
}

export default App
