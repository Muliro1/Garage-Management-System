import React,{useState,useEffect} from 'react'
import PostService from '../PostService/PostService';
import "./ServiceContainer.css"

const ServiceContainer = () => {
    const [access, getAccess] = useState([]);

    useEffect(() => {
      fetch("http://localhost:4000/posts")
        .then((r) => r.json())
        .then((data) => {
          getAccess(data);
        });
    }, [access]);

   

  return (
    <div className="serviceContainer">
       {access?.length > 0 ? (
        <div className="box-container">
          {access.map((repCar) => (
              <PostService key={repCar.id} repCar={repCar} />
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