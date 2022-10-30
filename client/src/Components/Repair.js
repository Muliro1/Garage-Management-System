import React,{useState,useEffect} from 'react';
import ImageRepair from './ImageRepair';
import Footer from './footer/Footer';


const Repair = () => {
    const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term,] = useState('');

  useEffect(() => {
    fetch(`http://localhost:4000/img`)
      .then(res => res.json())
      .then(data => {
        setImages(data);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  }, [term]);
  console.log(images)

  return (
    <>
    <div className="container mx-auto">


      {/* <RepairSearch searchText={(text) => setTerm(text)} /> */}

      {!isLoading && images?.length  }

      {isLoading ? <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1> : <div className="grid grid-cols-3 gap-4">
        {images.map(image => (
          <ImageRepair key={image.id} image={image} />
        ))}
      </div>}
      
    </div>
    <Footer />
    </>
        
       
    );
}

export default Repair;