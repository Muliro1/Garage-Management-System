import React,{useState} from 'react'
import './update.css';

const Update = ({id,summary,onUpdateService}) => {
    const [messageBody, setMessageBody] = useState(summary);

    function handleFormSubmit(e) {
      e.preventDefault();
  
      fetch(`http://127.0.0.1:3000/vehicles/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            summary: messageBody,
        }),
      })
        .then((r) => r.json())
        .then((updatedSevice) => onUpdateService(updatedSevice));
    }
  return (
    <form className='update' onSubmit={handleFormSubmit}>
             <div className='formControl'>
        <input placeholder='Report'
              onChange={(e) =>setMessageBody(e.target.value)}
              value={messageBody}/>
              <input type='submit'  value='Update' className="btn-block"/>
        </div>
    </form>
  )
}

export default Update