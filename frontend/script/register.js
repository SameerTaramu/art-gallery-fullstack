
const registerButton = document.querySelector("#registerForm")

const BACKEND_BASE_URL="http://localhost:3000"
const handleRegister=async(e)=>{
    e.preventDefault()
    
    const registerPayload = {
        username:document.querySelector("#username").value,
        password:document.querySelector("#password").value,
        email:document.querySelector("#email").value,
        confirmPassword:document.querySelector("#confirm-password").value
    }

    if(registerPayload.password!==registerPayload.confirmPassword){
        return alert("Password didn't match")
    }



  const res =   await axios.post(`${BACKEND_BASE_URL}/api/auth/register`,{
        name:registerPayload.username,
        email:registerPayload.email,
        password:registerPayload.password
    })

    if(res.status===201){
        alert("Registered successfully")
        location.href="/frontend"
    }

   
    



}

registerButton.addEventListener("submit",handleRegister)
