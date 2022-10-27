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

    const getViews = access.map((view) => (
        <access key={view.id} view={view} onDelete={handleDeleteViews} />
      ));

  return (
    <div className="review-container">
    {access?.length > 0 ? getViews : <h2>No accesss found</h2>}
  </div>
  )
}

export default ServiceContainer