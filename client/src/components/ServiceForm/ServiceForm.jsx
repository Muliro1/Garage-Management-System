import React,{ useState} from 'react'
import "./ServiceForm.css"

const ServiceForm = () => {
    const [make, setMake] = useState("");
    const [vehicle, setVehicle] = useState("");
    const [plate, setPlate] = useState("");
    const [image, setImage] = useState("");
    const [price, setPrice] = useState("");
    const [option, setOption] = useState("");
    const [summary, setSummary] = useState("");
    const [speed, setSpeed] = useState("");

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

      function HandlePriceChange(event) {
        setPrice(event.target.value);
      }

      function HandleSpeedChange(event) {
        setSpeed(event.target.value);
      }

      function HandleSubmit(e) {
        e.preventDefault();
        const sumData = {
          make: make,
          vehicle: vehicle,
          image: image,
          plate: plate,
          price: price,
          option: option,
          summary: summary,
          speed: speed,
        };
    
        fetch("http://localhost:4000/posts",{
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(sumData),
        });
    
        setPlate("");
        setImage("");
        setSummary("");
        setMake("");
        setPrice("");
        setSpeed("");
      }

  return (
    <form className="add-form" onSubmit={HandleSubmit}>
    <div className="form-control">
        <label>Make</label>
        <input  placeholder="2020 model" required
        onChange={HandleMakeChange}
        value={make}
    />
    </div>
    <div className="form-control">
        <label>Vehicle</label>
        <input  placeholder="Audi/BMW" required
        onChange={HandleVehicleChange}
        value={vehicle}
    />
    </div>
    <div className="form-control">
        <label>Plate</label>
        <input  placeholder="KAY851Q" required
        onChange={HandlePlateChange}
        value={plate}
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
        <label>price</label>
        <input  placeholder="price"
        onChange={HandlePriceChange} 
        value={price}
    />
    </div>

    <div className="form-control">
        <label>speed</label>
        <input  placeholder="254km/h" required
        onChange={HandleSpeedChange}
        value={speed}
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
    <input type='submit' value='Add Vehicle' className="btn-block"/>
</form>
  )
}

export default ServiceForm;