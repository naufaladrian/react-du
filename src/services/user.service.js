// mendapatkan semua user
export const getAllUser = async () => {
    try {
        const response = await fetch("http://localhost:3000/users")
        const responseJson = await response.json();
        return responseJson
    } catch (error) {
        console.log("ini error");
    }
}

export const addUser = async (req) => {
    const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(req)
    })
    const responseJson = await response.json();
    return responseJson
}

export const deleteUser = async (id) => {
    const response = await fetch("http://localhost:3000/users/" + id, {
        method: "DELETE",
    })
    const responseJson = await response.json();
    return responseJson
}

//mendapat user dengan id tertentu
export const getUser = async (id) => {
    const response = await fetch("http://localhost:3000/users/" + id)
    const responseJson = await response.json();
    return responseJson
}

export const editUser = async (req, id) => {
    const response = await fetch("http://localhost:3000/users/" + id, {
        method: "PUT",
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(req)
    })
    const responseJson = await response.json();
    return responseJson
}