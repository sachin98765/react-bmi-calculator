import React from "react"
import { useState } from "react"

const App = () => {
  const [weight, setweight]=useState(0)
  const [height,setHeight]=useState(0)
  const [bmivalue, setBmivalue]=useState(0)
  const [message,setMessage] = useState('')

  const bmiCalculator = () =>{
    const bmi = (weight /(height * height)).toFixed(2)
    setBmivalue(bmi)
    // alert(bmi)
    if(bmi<18.5){
      setMessage('Underweight')
    }else if(bmi>=18.5 && bmi<=24.9){
      setMessage('Normal Weight')
    }else if(bmi>=25 && bmi<=29.9){
      setMessage('Overweight')
    }else{
      setMessage('Obesity')
    }
    setHeight(0)
    setweight(0)
  }
  return (
    <div className="md:h-screen w-screen-full flex justify-center items-center bg-gradient-to-br from-gray-900 to-black text-white pt-7">
      <div className="md:w-2/6">
        <h1 className="text-4xl font-bold">BMI CALCULATOR</h1>
        <div className="rounded-2xl bg-gradient-to-r from-zinc-300 to-slate-300 p-8 mt-6">
        <div className=" flex flex-col">
          <label htmlFor="weight" className="text-2xl my-4 text-blue-950 font-bold">
            Weight (kg)
          </label>
          <input type="number" value={weight} className="bg-gray-800 rounded-md px-8 py-2 " onChange={(e)=>setweight(e.target.value)} />
        </div>
        <div className="mt-4 flex flex-col">
          <label htmlFor="height" className="text-2xl my-4 text-blue-950 font-bold">
            Height (Mtr)
          </label>
          <input type="number" value={height} className="bg-gray-800 rounded-md px-8 py-2 " onChange={(e)=>setHeight(e.target.value)} />
        </div>

        <div>
          <button className="bg-blue-600 mt-8 w-full text-2xl py-2 rounded-md" onClick={bmiCalculator} >Calculate</button>
        </div>
        </div>
        <div className="mt-6 text-2xl bg-gray-800 rounded-md px-8 py-3">
          <h2 className="text-center">BMI Value :{bmivalue?bmivalue:"Value Pending..."}</h2>
          <h2 className="text-center">{bmivalue?message:"Calculation Pending"}</h2>
        </div>
       
      </div>
    </div>
  )
}

export default App
