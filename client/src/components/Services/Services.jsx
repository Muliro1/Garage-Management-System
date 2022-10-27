import React,{useState} from 'react'
import { Container } from '@mui/material'
import {Add} from '@mui/icons-material'
import {Fab} from '@mui/material'
import ServiceForm from '../ServiceForm/ServiceForm'
import ServiceContainer from '../ServiceContainer/ServiceContainer'
import "./services.css"

const Services = () => {
  const [showService, setShowService] = useState();

  const setNewService = () => {
    console.log("default");
  };

  const toggleTable=()=> {
    setShowService((showService) => !showService);
  }
  
  return (
     
        <div className='serviceMenu'>
        <div className="serviceSide">
        <Fab color='primary'
        aria-label="add"
        >
        <Add fontSize='large' onClick={toggleTable}/>
        </Fab>
        {showService ? <ServiceForm setNewService={setNewService} /> : null}
      </div>
      <ServiceContainer setNewService={setNewService} />
        </div>
  )
}

export default Services