import React,{useState,useEffect} from 'react'
import Mechanic from "../Team/Mechanic"
import "./technicians.css"

const Technicians = () => {
  const [technician, displayTechnician] = useState([]);
  const [query, setQuery] = useState("")


  useEffect(() => {
    fetch("")
    
      .then((r) => r.json())
      .then((data) => {
        displayTechnician(data);
      });
  }, []);



  return (
    <div className='technicians'>
        <div className="search__box">
                <input type="text" placeholder="Search" onChange={(e)=>setQuery(e.target.value)}/>
              </div>
          {technician?.length > 0 ? (
        <div className="box-container">
          {technician.filter((value) => {
            if (query === "") {
              return value;
            } else if (
              value.name.toLowerCase().includes(query.toLowerCase())
            ) {
              return value;
            }
          })
          .map((tech) => (
            <Mechanic key={tech.id} tech={tech} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Technician found</h2>
        </div>
      )}
    </div>
  )
}

export default Technicians;
