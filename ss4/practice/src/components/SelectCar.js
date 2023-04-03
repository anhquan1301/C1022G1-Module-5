import { useEffect, useState } from "react"
const carList = ['Mercedes MayBach S650', 'Role-Royce Ghost', 'BMW-I8', 'Lamborghini-Aventador']
const colorList = ['White', 'Black', 'Grey', 'Pink', 'Red']
export default function SelectCar() {
    const [carValue, setCarValue] = useState("0")
    const chooseValue = (value) => {
        setCarValue(value)
    }
    const [carName, setCarName] = useState("")
    const chooseCar = () =>{
        setCarName(carList[carValue])
    }
    useEffect(()=>{
        chooseCar()
    },[carValue])
    return (
        <>  <h1>Select your car</h1>
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
            <h3>Your select: {carName}</h3>
        </>
    )
}