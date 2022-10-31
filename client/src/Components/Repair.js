import React,{useState,useEffect} from 'react';
import ImageRepair from './ImageRepair';
import Footer from './footer/Footer';


const Repair = () => {
  const [vehicles, setVehicles] = useState([]);
const [isLoading, setIsLoading] = useState(true);
const [term, setTerm] = useState('');

useEffect(() => {
  fetch(`http://127.0.0.1:3000/vehicles`)
    .then(res => res.json())
    .then(data => {
      setVehicles(data);
      setIsLoading(false);
    })
    // .catch(err => console.log(err));
}, [term]);
console.log(vehicles)

return (
  <>
  <div className="container mx-auto">


    {/* <ImageSearch searchText={(text) => setTerm(text)} /> */}

    {!isLoading && vehicles?.length  }

    {isLoading ? <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1> : <div className="grid grid-cols-3 gap-4">
      {vehicles.map(vehicle => (
        <ImageRepair key={vehicle.id} vehicle={vehicle} />
      ))}
    </div>}
  </div>
  <Footer />
  </>
      
     
  );
}

export default Repair;