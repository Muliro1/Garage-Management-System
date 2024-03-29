import React,{ useState} from 'react'
import "./ServiceForm.css"

const ServiceForm = ({user,refresh,setRefresh}) => {
    const [make, setMake] = useState("");
    const [vehicle_type, setVehicle] = useState("");
    const [plate_number, setPlate] = useState("");
    const [image, setImage] = useState("");
    const [option, setOption] = useState("");
    const [summary, setSummary] = useState("");

    function HandleMakeChange(event) {
        setMake(event.target.value);
      }

      function HandleVehicleChange(event) {
        setVehicle(event.target.value);
      }

      function HandleImageChange(event) {
        setImage(event.target.value);
      }
    
      function HandlePlateChange(event) {
        setPlate(event.target.value);
      }
    
      function HandleSummaryChange(event) {
        setSummary(event.target.value);
      }

      function HandleOptionChange(event) {
        setOption(event.target.value);
      }

     

      

      function HandleSubmit(e) {
        e.preventDefault();
        const sumData = {
          make: make,
          vehicle_type: vehicle_type,
          image: image,
          plate_number: plate_number,
          option: option,
          summary: summary,
          billing: 0,
          approved: false,
          cleared: false,
          user_id: user.id
        };
    
        fetch("http://127.0.0.1:3000/vehicles",{
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(sumData),
        })
          .then((r) => {
            if (r.ok) {
              r.json().then(() => {
                setRefresh(!refresh)
              })
            } else {
              r.json().then((error)=>console.log(error))
          }
        })
    
        setPlate("");
        setImage("");
        setSummary("");
        setMake("");
      }

  return (
    <form className="add-form" onSubmit={HandleSubmit}>
    <div className="form-control">
        <label>Make</label>
        <input  placeholder="Audi/BMW" required
        onChange={HandleMakeChange}
        value={make}
    />
    </div>
    <div className="form-control">
        <label>Vehicle</label>
        <input  placeholder="Truck/SUV" required
        onChange={HandleVehicleChange}
        value={vehicle_type}
    />
    </div>
    <div className="form-control">
        <label>Plate</label>
        <input  placeholder="KAY851Q" required
        onChange={HandlePlateChange}
        value={plate_number}
    />
    </div>
    <div className="form-control">
        <label>image</label>
        <input  placeholder="Add image"
        onChange={HandleImageChange} 
        value={image}
    />
    </div>

  
    <div className="form-control">
        <label>Option</label>
        <select  placeholder="option" required
        value={option}
        onChange={HandleOptionChange}>
          <option>repair/service</option>
            <option >service</option>
            <option >repair</option>
        </select>
    </div>
    
    <div className="form-control">
        <label>summary</label>
        <textarea
        placeholder="Describe the issue here..."
        rows={5}
        required
        onChange={HandleSummaryChange}
        value={summary}
      />
        </div>
    <input  type='submit' value='Add Vehicle' className="bg-white font-bold p-1 m-2 float-right rounded-md hover:bg-orange-500 hover:text-white cursor-pointer"/>
</form>
  )
}

export default ServiceForm;