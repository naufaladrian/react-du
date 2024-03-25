/**
 * *import 
 */
import UserLayout from "./components/layout/UserLayout"
import { useState } from "react"


function ToDo({ isDone }) {
  // Jika isDone bernilai true, maka menjalankan yg ada dlm if
  // jika isDone bernilai false, maka menjalankan else
  if (isDone) {
    return <p>Tugas Selesai</p>
  } else {
    return <p>Tugas Blm Selesai</p>
  }
}

function App() {
  /**
   * angka : untuk mengambil nilai/value terakhir dari state
   * setAngka : untuk mengubah nilai/value dari state
   * useState(0) : 0 merupakan nilai awal pada state
   */
  const [angka, setAngka] = useState(100)
  const [isDone, setIsDone] = useState(false)
  const daftarPeserta = [{ nama: "peserta 1", kelas: "web" }, { nama: "peserta 2", kelas: "cyber" }, { nama: "peserta 3", kelas: "mobile" }]

  const handleIsDone = () => {
    setIsDone(!isDone)
  }

  const helloWorld = (greet) => {
    alert(greet)
  }
  return (
    <>
      <UserLayout>
        <p>{angka}</p>
        <button className="bg-slate-800 p-1 text-white m-4" onClick={() => setAngka(angka + 1)}>Increment</button>
        <button className="bg-slate-800 p-1 text-white m-4" onClick={() => helloWorld("Halo.......")}>Say Hello</button>
        <ToDo isDone={isDone} />
        <p>{isDone ? "ini bernilai true" : "ini bernilai false"}</p>
        <p>{isDone && "ini bernilai true"}</p>
        <button className="bg-blue-800 p-1 text-white m-4" onClick={handleIsDone}> Done</button>
        <p className=" font-semibold text-red-500 my-2">Dibawah ini List Nama :</p>
        {
          daftarPeserta.map((peserta, index) => (
            <p className=" text-blue-700" key={index} >nama : {peserta.nama}, kelas : {peserta.kelas}</p>
          ))
        }
        {
          daftarPeserta.map((peserta, index) => (
            <p className=" text-blue-700" key={index} >{...peserta.kelas}</p>
          ))
        }
      </UserLayout>
    </>
  )
}

export default App
