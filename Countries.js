import React , {useState, useEffect} from "react";
import Card from "./Card";



function Countries() {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
     const fetchCountries = () => {
        fetch("https://restcountries.com/v3.1/all")
        .then((res) => res.json())
        .then((data) => setCountries(data))
        
     } 
     fetchCountries();  
    },[])


    return (
        <div className="country_card">
            {countries.map((country) => {
                return (
                    <div className="countryy">
                        <Card country ={country} />
                    </div>
                )

            })
            
            }
            {console.log(countries)}
           
        </div>
    )
}

export default Countries;

