import React from 'react'

function Inventory({ part, repairPrice,setRepairPrice, refresh, setRefresh }) {

    function addPart() {
        let newPrice = repairPrice + part.price
        fetch(`http://127.0.0.1:3000/parts/${part.id}`, {
            method: 'PATCH',
            headers: { 'content-Type': 'application/json' },
            body: JSON.stringify({
                count: part.count -= 1
            })
        })
            .then(() => {
                
                setRefresh(!refresh)
                setRepairPrice(newPrice)
            })
    }
    // console.log(part)
    return (
        <>
            <section className='bg-slate-300 rounded-lg grid grid-cols-6  m-6 '>
                <img  src={part.image} alt={part.name} />
                <div className='col-span-5'>
                    <div className='m-6 grid grid-cols-3'>
                        <p>Part Name:<span className='font-black'>{part.name}</span></p>
                        <p>Part price:<span className='font-black'>{part.price}</span></p>
                        <p>Part quantity:<span className='font-black'>{part.count}</span> </p>
                    </div>
                    <button onClick={() => addPart()} className=' bg-black text-white font bold  hover:text-orange-500 p-1 rounded-md ml-[28em] mb-2'>Use Part</button>
                </div>
            </section>
        </>
    )
}

export default Inventory