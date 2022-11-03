import React, { useState, useEffect } from "react";
import ServicingCard from "./ServicingCard";
import Footer from "./footer/Footer";

const Servicing = ({technician}) => {
  const [vehicles, setVehicles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState(false);
  let AssignedCars = []

  // console.log(vehicles)
  useEffect(() => {
    fetch(`http://127.0.0.1:3000/vehicles`)
      .then((res) => res.json())
      .then((data) => {
        data.map((vehicle) => {
          if (vehicle.technician_id === technician.id) {
            AssignedCars.push(vehicle)
            setVehicles(AssignedCars)
            setIsLoading(false)
          }
        })
      });
    // .catch(err => console.log(err));
  }, [term]);

  return (
    <section className='sect h-[89vh] overflow-y-scroll'>
      <div className="container mx-auto">
        {/* <ImageSearch searchText={(text) => setTerm(text)} /> */}

        {!isLoading && vehicles?.length}

        {isLoading ? (
          <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1>
        ) : (
            <div className="grid grid-cols-4 gap-4 w-11/12 m-auto mt-6 mb-20">
            {vehicles.map((vehicle) => {
              if (vehicle.option === "service") {
                return (
                  <ServicingCard
                    key={vehicle.id}
                    vehicle={vehicle}
                    term={term}
                    setTerm={setTerm}
                  />
                );
              }
            })}
          </div>
        )}
      </div>
      <Footer />
    </section>
  );
};

export default Servicing;
