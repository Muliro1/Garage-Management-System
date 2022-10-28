import React, { useState } from 'react';
import ReactModal from 'react-modal';

function AdminClient({client}) {
    const [isOpen, setIsOpen] = useState(false);
  return (
      <div className='flex justify-around bg-slate-300 rounded-lg pt-2 pb-1 mb-2 mr-2 ml-2 mt-6'>
          <svg width="30" height="30" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M30 0.833344C46.1 0.833344 59.1666 13.9 59.1666 30C59.1666 46.1 46.1 59.1667 30 59.1667C13.9 59.1667 0.833313 46.1 0.833313 30C0.833313 13.9 13.9 0.833344 30 0.833344ZM12.5671 39.9633C16.8487 46.3508 23.2771 50.4167 30.4666 50.4167C37.6533 50.4167 44.0846 46.3538 48.3633 39.9633C43.5092 35.4268 37.1106 32.9074 30.4666 32.9167C23.8216 32.9066 17.4219 35.4261 12.5671 39.9633ZM30 27.0833C32.3206 27.0833 34.5462 26.1615 36.1872 24.5205C37.8281 22.8796 38.75 20.654 38.75 18.3333C38.75 16.0127 37.8281 13.7871 36.1872 12.1462C34.5462 10.5052 32.3206 9.58334 30 9.58334C27.6793 9.58334 25.4537 10.5052 23.8128 12.1462C22.1719 13.7871 21.25 16.0127 21.25 18.3333C21.25 20.654 22.1719 22.8796 23.8128 24.5205C25.4537 26.1615 27.6793 27.0833 30 27.0833Z" fill="black" />
          </svg>
          <p>{client.name}</p>
          <p>{client.email}</p>
          <p>1234Nairobistreet</p>
          <p>{client.telephone}</p>

          <svg onClick={() => setIsOpen(!isOpen)} title="view client" width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.18103 9C1.12103 3.88 5.60803 0 11 0C16.392 0 20.878 3.88 21.819 9C20.879 14.12 16.392 18 11 18C5.60803 18 1.12203 14.12 0.18103 9ZM11 14C12.3261 14 13.5979 13.4732 14.5356 12.5355C15.4732 11.5979 16 10.3261 16 9C16 7.67392 15.4732 6.40215 14.5356 5.46447C13.5979 4.52678 12.3261 4 11 4C9.67395 4 8.40218 4.52678 7.4645 5.46447C6.52681 6.40215 6.00003 7.67392 6.00003 9C6.00003 10.3261 6.52681 11.5979 7.4645 12.5355C8.40218 13.4732 9.67395 14 11 14ZM11 12C10.2044 12 9.44132 11.6839 8.87871 11.1213C8.3161 10.5587 8.00003 9.79565 8.00003 9C8.00003 8.20435 8.3161 7.44129 8.87871 6.87868C9.44132 6.31607 10.2044 6 11 6C11.7957 6 12.5587 6.31607 13.1214 6.87868C13.684 7.44129 14 8.20435 14 9C14 9.79565 13.684 10.5587 13.1214 11.1213C12.5587 11.6839 11.7957 12 11 12Z" fill="white" />
          </svg>

          <ReactModal
              onRequestClose={() => setIsOpen(false)}
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
                      width: '20em',
                      top: '15em',
                      left: '45em',
                      bottom: '8em',
                      border: '1px solid #ccc',
                      background: 'white',
                      overflow: 'auto',
                      WebkitOverflowScrolling: 'touch',
                      borderRadius: '4px',
                      outline: 'none',

                  }
              }}
          >
              <div >
                  <p>{client.name}</p>
                  <button className='bg-black p-1 text-white float-right' onClick={() => setIsOpen(!isOpen)}>Close</button>

              </div>

          </ReactModal>
      </div>
  )
}

export default AdminClient