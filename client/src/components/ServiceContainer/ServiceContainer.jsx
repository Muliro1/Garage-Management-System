import React,{useState,useEffect} from 'react'
import PostService from '../PostService/PostService';
import "./ServiceContainer.css"

const ServiceContainer = () => {
    const [access, getAccess] = useState([]);

    useEffect(() => {
      fetch("http://127.0.0.1:3000/vehicles")
        .then((r) => r.json())
        .then((data) => {
          getAccess(data);
        });
    }, [access]);

    function handleDeleteService(deletedServices) {
      const updatedSevice = access.filter(
        (repCar) => repCar.id !== deletedServices.id
      );
      getAccess(updatedSevice);
    }

  return (
    <div className="serviceContainer">
       {access?.length > 0 ? (
        <div className="box-container">
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