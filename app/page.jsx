'use client'

import { useEffect, useState } from "react"

const HomePage = () => {

  const [time, setTime] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  

  useEffect(() => {
    let intervalID;
    if (isRunning) {
      const startTime = Date.now() - time;
      intervalID = setInterval(() => {
        setTime(Date.now() - startTime);
      }, 10); // 10ms
    } else {
      clearInterval(intervalID);
    }
    return () => clearInterval(intervalID);
  }, [isRunning]);

  const minutos = Math.floor(time/60000)
  const segundos = Math.floor((time%60000)/1000)
  const milisegundos = Math.floor((time%1000)/10)

  const formatNumber = (num) => String(num).padStart(2,'0')

  const startStop = () => {
    setIsRunning(!isRunning)
  }

  const reset = () => {
    setIsRunning(false)
    setTime(0)
  }

  return (
    <section className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-md">
      <p className="text-2xl font-semibold text-gray-700 mb-4">
        {formatNumber(minutos)}:
        {formatNumber(segundos)}:
        {formatNumber(milisegundos)}
      </p>
  
      <div className="flex space-x-4">
        <button
          onClick={startStop}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition duration-200"
        >
          Iniciar
        </button>
  
        <button
          onClick={reset}
          className="px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition duration-200"
        >
          Reiniciar
        </button>
      </div>
    </section>
  )
  
}

export default HomePage