import React,{useState} from 'react';
import RepairInfo from './RepairInfo';
import ReactModal from 'react-modal';

const ImageRepair = ({ vehicle,term,setTerm }) => {
  const [isOpen, setIsOpen] = useState(false);
 

  return (
    <div className="max-w-sm rounded overflow-auto shadow-lg">
      <img src={vehicle.image} alt="" className="w-full"/>
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
         {vehicle.make}
        </div>
        <ul>
          <li>
            <strong>plate_number: </strong>
            {vehicle.plate_number}
          </li>
          <li>
            <strong>option: </strong>
            {vehicle.option}
          </li>
          <li>
            <strong>vehicle_type: </strong>
            {vehicle.vehicle_type}
          </li>
          <li>
            <strong>billing: </strong>
            {vehicle.billing} Ksh
          </li>

        </ul>
      </div>
      <div className="px-6 py-4">
        <button onClick={() => setIsOpen(!isOpen)} className='text-white font-bold bg-black p-1 rounded-md float-right mb-2 hover:text-orange-500'>Show More</button>
        <ReactModal
          onRequestClose={() => setIsOpen(false)}
          ariaHideApp={false}
          isOpen={isOpen}
          contentLabel="Example Modal"
          style={{
            overlay: {
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(255, 255, 255, 0.3)'
            },
            content: {
              position: 'absolute',
              width: '50em',
              top: '4em',
              left: '22em',
              bottom: '6em',
              border: '1px solid #ccc',
              background: 'white',
              overflow: 'auto',
              WebkitOverflowScrolling: 'touch',
              borderRadius: '4px',
              outline: 'none',

            }
          }}
        >
          <RepairInfo vehicle={vehicle} term={term} setTerm={setTerm} isOpen={isOpen} setIsOpen={setIsOpen} />

        </ReactModal>
     
      </div>
    </div>
  )
}

export default ImageRepair;