import React from 'react'
import UserLayout from '../components/layout/UserLayout'
import styles from '../assets/styles/Header.module.css'
//import useNavigate dari react-router-dom
import { useNavigate } from 'react-router-dom'

export default function Dashboard() {
    /**
     * useNavigate merupakan hook dari react-router-dom yang bisa digunakan 
     * untuk membuat fungsi yang bisa menavigasi atau mengarahkan user ke halaman lain
     */
    //membuat fungsi navigate dari useNavigate()
    const navigate = useNavigate()

    //event handler untuk menavigasi user ke halaman lain berdasarkan parameter "location"
    const navigateTo = (location) => {
        navigate(location)
    }
    return (
        <UserLayout>
            <h1 className=' text-red-800 font-bold' style={{ fontSize: '32px' }}>Dashboard</h1>
            {/**
             * ketika button di click, user akan berpindah ke "/product"
             */}
            <button onClick={() => navigateTo("/product")} className=' bg-blue-800 text-white py-1 px-2 mt-4 rounded-md'>Our Product</button>
            <h2 className={styles.header}>Test module css</h2>
            <h2 className='header'>Test module css</h2>
        </UserLayout>
    )
}
