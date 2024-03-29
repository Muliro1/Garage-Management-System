import React,{useState,useEffect} from 'react';
import ImageRepair from './ImageRepair';
import Footer from './footer/Footer';


const Repair = ({technician}) => {
const [vehicles, setVehicles] = useState([]);
const [isLoading, setIsLoading] = useState(true);
const [term, setTerm] = useState(false);
let AssignedCars = [];

useEffect(() => {
  //let AssignedCars = [];
  fetch(`http://127.0.0.1:3000/vehicles`)
    .then(res => res.json())
    .then((data) => {
      data.map((vehicle) => {
        if (vehicle.technician_id === technician.id) {
          AssignedCars.push(vehicle)
          setVehicles(AssignedCars)
          setIsLoading(false)
        }
      })
    })
}, /*[term, AssignedCars,technician.id]*/);
console.log(vehicles)

return (
  <section className='sect h-[89vh] overflow-y-scroll'>
  <div className="container mx-auto">
    {!isLoading && vehicles?.length  }
      {isLoading ? <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1> : <div className="grid grid-cols-4 gap-4 w-11/12 m-auto mb-20 mt-6">
      {vehicles.map(vehicle => {
        
        if(vehicle.option=== "repair"){
          return (
            <ImageRepair key={vehicle.id} vehicle={vehicle} term={term} setTerm={setTerm}/>
          )

        }
})}
    </div>}
  </div>
  <Footer />
  </section>
      
     
  );
}

export default Repair;