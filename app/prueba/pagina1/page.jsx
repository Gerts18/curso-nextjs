"use client"
import { useEffect, useState } from "react"

const Prueba = () => {
    const [nombre, setNombre] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api')
                if(!response.ok) {
                    throw new Error('Algo salio mal')
                }
                const data = await response.json()
                setNombre(data.message)
            } catch (error) {
                console.log("Error en EP /api/",error)
            }
        }
        fetchData()
        
    }, [])
    console.log(nombre);
  return (
    <div>Hola,{nombre&&nombre}</div>
  )
}

export default Prueba