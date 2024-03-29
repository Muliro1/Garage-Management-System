import React from 'react';


function AdminInventory({ part,partsRefresh, setPartsRefresh }) {

    // increase item count
    function handleIncrease() {
        fetch(`http://127.0.0.1:3000/parts/${part.id}`, {
            method:'PATCH',
            headers: { 'content-Type': 'application/json' },
            body: JSON.stringify({
                count:part.count+=1
            })
        })
        .then(()=>setPartsRefresh(!partsRefresh))
    }

    // decrease item count
    function handleDecrease() {
        fetch(`http://127.0.0.1:3000/parts/${part.id}`, {
            method: 'PATCH',
            headers: { 'content-Type': 'application/json' },
            body: JSON.stringify({
                count: part.count -= 1
            })
        })
            .then(() => setPartsRefresh(!partsRefresh))
    }
    
    return (
        <>
            
            <div className=" grid grid-cols-2 h-[30vh] border-solid  bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <img className="rounded-t-lg h-[30vh] " src={part.image} alt="" />
                <div className="overflow-hidden hover:overflow-y-scroll text-center p-1 ">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white " >{part.name}</h5>
                    <p>Model:<br></br> <span className='font-black font-serif text-lg'>{part.model}</span></p>
                    <p>Serial Number:<br></br> <span className='font-black font-serif text-lg'>{part.serial_number}</span></p>
                    <p>Price: <span className='font-black font-serif text-lg'>{part.price}ksh</span></p>
                    <p>Condition: <br></br><span className='font-black font-serif text-lg'>{part.condition}</span></p>
                    <p>Number in Garage: <span className='font-black font-serif text-lg'>{part.count}</span></p>
                    <div className='mt-4 grid grid-cols-2 gap-4'>
                        <button onClick={() => handleIncrease()} className='border  p-1 cursor-pointer hover:border-white hover:bg-green-500 hover:text-white'>Increase</button>

                    <button onClick={()=>handleDecrease()} className='  border  p-1 cursor-pointer border-white bg-black text-white hover:text-black hover:bg-red-500'>Decrease</button>

                    </div>
                </div>
            </div>

        </>
    );
}

export default AdminInventory;