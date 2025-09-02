import { useEffect, useState } from "react";
import SingleCoffie from "./SingleCoffie";
const Coffies = () => {
    const [coffies, setCoffies] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/coffe')
            .then(res => res.json())
            .then(data => setCoffies(data))
    }, [])
    return (
        <div className=" mx-auto  place-items-center  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  mt-4 gap-4">
            {coffies.map((coffe) => <SingleCoffie setCoffies={setCoffies} key={coffe._id} coffe={coffe}></SingleCoffie>)}
        </div>
    );
};

export default Coffies;