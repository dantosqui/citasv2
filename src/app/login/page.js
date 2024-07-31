'use client'
import react from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Contacto() {
  const router=useRouter()

    const [username,setUsername] = useState("")

  const handleLogin = (e) =>{
    e.preventDefault()
    //axios.loguearse
    //provisional
    localStorage.setItem("username",username)
    //--
    router.push("/")
  }

  return (
    <div>
      <h1>Iniciar sesion</h1>
      <form onSubmit={handleLogin}>
        
        <div>
          <label htmlFor="username">Nombre de usuario:</label>
          <input type="text" id="username" name="username" onChange={(e) => setUsername(e.target.value)} />
        </div>
        
        <div>
          <label htmlFor="message">Contraseña: </label>
          <input type="password" id="message" name="message" />
        </div>
        
        <div>
          <button type="submit">Entrar</button>
        </div>

      </form>
    </div>
  );
}
