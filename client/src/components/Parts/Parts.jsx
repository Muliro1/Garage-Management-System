import React,{useState,useEffect} from 'react'
import PartItem from '../PartItem/PartItem'
import "./parts.css"

const Parts = () => {
    const [parts, setParts] = useState([]);
    const [view, setView] = useState("");
  
    useEffect(() => {
      fetch("http://127.0.0.1:3000/parts")
        .then((r) => r.json())
        .then((data) => {
        setParts(data);
        });
    }, []);
  
    return (
      <div className="parts">
        <div className="search__box mt-4">
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => setView(e.target.value)}
          />
        </div>
        {parts?.length > 0 ? (
          <div className="box-container grid grid-cols-2">
            {parts
              .filter((value) => {
                if (view === "") {
                  return value;
                } else if (
                  value.name.toLowerCase().includes(view.toLowerCase())
                ) {
                  return value;
                }
              })
              .map((part) => (
                <PartItem key={part.id} part={part} />
              ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No parts found</h2>
          </div>
        )}
      </div>
    );
  };

export default Parts