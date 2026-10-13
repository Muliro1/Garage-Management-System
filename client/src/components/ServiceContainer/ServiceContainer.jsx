import React,{useState,useEffect} from 'react'
import PostService from '../PostService/PostService';
import "./ServiceContainer.css"
import { API_ENDPOINTS } from '../../config';

const ServiceContainer = ({user,refresh}) => {
  const [access, getAccess] = useState([]);
  let ownerCars = []


    useEffect(() => {
      if (!user?.id) {
        getAccess([]);
        return;
      }
      fetch(API_ENDPOINTS.VEHICLES)
        .then((r) => r.json())
        .then((data) => {
          const owned = data.filter(
            (vehicle) => vehicle.user?.id === user.id,
          );
          getAccess(owned);
        });
    }, [refresh, user?.id]);
  

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