import React,{useState,useEffect} from 'react'

const ServiceContainer = () => {
    const [access, getAccess] = useState([]);
    useEffect(() => {
      fetch("")
        .then((r) => r.json())
        .then((data) => {
          getAccess(data);
        });
    }, [access]);

  return (
    <div>ServiceContainer</div>
  )
}

export default ServiceContainer