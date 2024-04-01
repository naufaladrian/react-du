import React from 'react'
import UserLayout from '../components/layout/UserLayout'

//import useParams dari react-router-dom
import { useParams } from 'react-router-dom'


export default function ProductDetail() {
    /**
     * useParams digunakan untuk mengambil value dari url parameter route saat ini
     * const {....} = useParams()
     * apa yang ada dalam kurung kurawal disesuaikan dengan nama url parameter
     * karena pada App.jsx menggunakan route "/:idProduct", maka const { idProduct } = useParams()
     */
    const { idProduct } = useParams()
    return (
        <UserLayout>
            <h1 className=' text-red-800 font-bold text-lg'>
                {/* menampilkan idProduct yang telah diambil dari url parameter */}
                Detail produk id : {idProduct}
            </h1>
        </UserLayout>
    )
}
