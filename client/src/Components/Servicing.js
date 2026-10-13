import React, { useState, useEffect } from 'react';
import ServicingCard from './ServicingCard';
import Footer from './footer/Footer';
import { API_ENDPOINTS } from '../config';

const Servicing = ({ technician }) => {
  const [vehicles, setVehicles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState(false);

  useEffect(() => {
    if (!technician?.id) {
      setIsLoading(false);
      return;
    }
    setIsLoading(true);
    fetch(API_ENDPOINTS.VEHICLES)
      .then((res) => res.json())
      .then((data) => {
        const assigned = data.filter(
          (vehicle) =>
            vehicle.technician_id === technician.id && vehicle.option === 'service',
        );
        setVehicles(assigned);
      })
      .finally(() => setIsLoading(false));
  }, [term, technician?.id]);

  return (
    <section className='sect h-[89vh] overflow-y-scroll'>
      <div className="container mx-auto">
        {isLoading ? (
          <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1>
        ) : vehicles.length === 0 ? (
          <h2 className="text-2xl text-center mx-auto mt-32">No service jobs assigned.</h2>
        ) : (
          <div className="grid grid-cols-4 gap-4 w-11/12 m-auto mt-6 mb-20">
            {vehicles.map((vehicle) => (
              <ServicingCard
                key={vehicle.id}
                vehicle={vehicle}
                term={term}
                setTerm={setTerm}
              />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </section>
  );
};

export default Servicing;
