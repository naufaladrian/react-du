import AdminLayout from "../components/layout/AdminLayout"
import { Link } from 'react-router-dom'
import { useEffect, useState } from "react"
import { getAllUser, deleteUser } from "../services/user.service"

export default function DataUser() {
    const [userData, setUserData] = useState([])

    const getData = async () => {
        const dataFromFetch = await getAllUser()
        setUserData(dataFromFetch)
    }

    const hadleDelete = async (id) => {
        await deleteUser(id)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <AdminLayout title="Data User">
                <Link to="create" className="capitalize font-maven text-white bg-blue-700 px-4 py-2 rounded-md">Add New User</Link>
                <div className=" overflow-x-auto sm:rounded-lg p-4 bg-white my-5">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    id
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    username
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    email
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                userData.map((user) => (
                                    <tr className="odd:bg-white even:bg-gray-50 border-b" key={user.id}>
                                        <td className="px-6 py-4">
                                            {user.id}
                                        </td>
                                        <td className="px-6 py-4">
                                            {user.name}
                                        </td>
                                        <td className="px-6 py-4">
                                            {user.email}
                                        </td>
                                        <td className="px-6 py-4 ">
                                            <Link to={'/admin/user/edit/' + user.id} className="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-2">
                                                Edit
                                            </Link>
                                            <button className="font-medium text-red-600 dark:text-red-500 hover:underline" onClick={() => hadleDelete(user.id)}>
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>

            </AdminLayout>
        </>
    )
}
