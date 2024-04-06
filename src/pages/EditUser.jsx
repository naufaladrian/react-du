import AdminLayout from "../components/layout/AdminLayout"
import { editUser, getUser } from "../services/user.service"
import { useEffect, useState } from "react"
import { useParams, useNavigate } from 'react-router-dom'

export default function EditUser() {
    const { userId } = useParams()
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        await editUser(
            {
                "name": username,
                "email": email
            }, userId
        ).then(navigate("/admin/user"))
    }

    const getData = async () => {
        const dataFromFetch = await getUser(userId)
        setEmail(dataFromFetch.email)
        setUsername(dataFromFetch.name)
    }

    useEffect(() => {
        getData()
    }, [])



    return (
        <AdminLayout title={"Edit user id:" + userId}>
            <section className="bg-white rounded-xl border border-gray-100 ">
                <div className="py-8 px-8 mx-auto max-w-6xl lg:py-12">
                    <h2 className="mb-4 text-3xl font-bold text-gray-900">Edit User</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                            <div className="sm:col-span-2">
                                <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900">Username</label>
                                <input type="text" name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Type Your Username" required value={username} onChange={(e) => setUsername(e.target.value)} />
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                                <input type="text" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Type Your Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                        </div>
                        <button type="submit" className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-primary-200 hover:bg-primary-800">
                            Submit
                        </button>
                    </form>
                </div>
            </section>
        </AdminLayout>
    )
}
