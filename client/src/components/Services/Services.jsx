import React,{useState} from 'react'
import {Add} from '@mui/icons-material'
import {Fab} from '@mui/material'
import ServiceForm from '../ServiceForm/ServiceForm'
import ServiceContainer from '../ServiceContainer/ServiceContainer'
import "./services.css"

const Services = ({user}) => {
  const [showService, setShowService] = useState(false);
  const [refresh, setRefresh] = useState(false);


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
        {showService ? <ServiceForm setNewService={setNewService} user={user} refresh={refresh} setRefresh={setRefresh} /> : null}
      </div>
      <ServiceContainer setNewService={setNewService} user={user} refresh={refresh}  />
        </div>
  )
}

export default Services