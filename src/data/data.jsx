import { useState, useEffect } from "react";
import Card from "../components/card"

const Data = function() {
    const [countries, setCountries] = useState([])
    const getData = () =>{
        fetch("https://restcountries.com/v3.1/all")
            .then(res => res.json())
            .then(data => {
                setCountries(data)
            })
    }
    useEffect(() =>{
        getData()
    },[])

return (
<div className=" grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" >
{countries.map(country => {
    return <Card data={country}/>
   })}
</div>
)





}
export default Data

