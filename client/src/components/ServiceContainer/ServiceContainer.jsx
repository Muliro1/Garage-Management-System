import React,{useState,useEffect} from 'react'
import PostService from '../PostService/PostService';
import "./ServiceContainer.css"

const ServiceContainer = ({user,refresh}) => {
  const [access, getAccess] = useState([]);
  let ownerCars = []


    useEffect(() => {
      fetch("http://127.0.0.1:3000/vehicles")
        .then((r) => r.json())
        .then((data) => {
          data.map((vehicle) => {
            if (vehicle.user.id === user.id) {
              ownerCars.push(vehicle)
              getAccess(ownerCars)
            }
          })
        });
    }, [refresh]);
  

    function handleDeleteService(deletedServices) {
      const updatedSevice = access.filter(
        (repCar) => repCar.id !== deletedServices.id
      );
      getAccess(updatedSevice);
    }

  return (
    <div className="serviceContainer">
       {access?.length > 0 ? (
        <div className="box-container grid grid-cols-2">
          {access.map((repCar) => (
              <PostService key={repCar.id} repCar={repCar} onDelete={handleDeleteService}/>
            ))}
        </div>
      ) : (
        <div className="empty">
          <h2>Add a Car</h2>
        </div>
      )}
  </div>
  )
}

export default ServiceContainer