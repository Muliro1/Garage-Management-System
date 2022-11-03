import React,{useState,useEffect} from 'react';
import ImageCard from './ImageCard';
import Footer from './footer/Footer';


const Vehicles = () => {
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
    <section className='sect h-[89vh] overflow-y-scroll '>
      <div className=" mx-auto ">


      {/* <ImageSearch searchText={(text) => setTerm(text)} /> */}

      {!isLoading && vehicles?.length  }

      {isLoading ? <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1> : <div className="grid grid-cols-4 gap-4 w-11/12 m-auto mb-20 pt-6">
        {vehicles.map(vehicle => (
          <ImageCard key={vehicle.id} vehicle={vehicle} />
        ))}
      </div>}
    </div>
    <Footer />
    </section>
        
       
    );
}

export default Vehicles;