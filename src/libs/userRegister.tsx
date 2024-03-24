export default async function userRegister(userName:string,userEmail:string,userPhone:string, userPassword:string) {

    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/auth/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail,
            phone: userPhone,
            password: userPassword
        }),
    })
    if(!response.ok) {
        throw new Error("Failed to register")
    }

    return await response.json()
}