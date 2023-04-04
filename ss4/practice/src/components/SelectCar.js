import { useEffect, useState } from "react"
const carList = ['Mercedes MayBach S650', 'Role-Royce Ghost', 'BMW-I8', 'Lamborghini-Aventador']
const colorList = ['White', 'Black', 'Grey', 'Pink', 'Red']
export default function SelectCar() {
    // SELECT CAR
    const [carName, setCarName] = useState("")
    const chooseCar = () =>{
        setCarName(carList[carValue])
    }
    const [carValue, setCarValue] = useState("0")
    const chooseValue = (value) => {
        setCarValue(value)
    }
    useEffect(()=>{
        chooseCar()
    },[carValue])

    // SELECT COLOR
    const[colorName,setColorName] = useState("")
    const selectColorName =() =>{
        setColorName(colorList[colorValue])
    }
    const[colorValue,setColorValue] = useState("0")
    const selectColorValue =(value) =>{
        setColorValue(value)
    }
    useEffect(()=>{
        selectColorName()
    },[colorValue])
    return (
        <> 
         <h1>Select your car</h1>
        <div>
            <label>Select a car</label>
            <select onChange={e=>{
                chooseValue(e.target.value)
            }}>
                {
                carList.map((car,index) => (
                    <option key={index} value={index}>{car}</option>
                ))
                }
            </select>
        </div>
        <div>
            <label>Select a color</label>
            <select onChange={e=>{
                selectColorValue(e.target.value)
            }}>
                {
                colorList.map((color,index) => (
                    <option key={index} value={index}>{color}</option>
                ))
                }
            </select>
        </div>
            <h3 >Your select: {carName}-{colorName}</h3>
        </>
    )
}