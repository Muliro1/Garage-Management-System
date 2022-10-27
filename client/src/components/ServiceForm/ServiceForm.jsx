import React,{ useState} from 'react'
import "./ServiceForm.css"

const ServiceForm = () => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [image, setImage] = useState("");
    const [price, setPrice] = useState("");
    const [summary, setSummary] = useState("");
    const [year, setYear] = useState("");

    function HandleTitleChange(event) {
        setTitle(event.target.value);
      }

      function HandleImageChange(event) {
        setImage(event.target.value);
      }
    
      function HandleAuthorChange(event) {
        setAuthor(event.target.value);
      }
    
      function HandleSummaryChange(event) {
        setSummary(event.target.value);
      }

      function HandlePriceChange(event) {
        setPrice(event.target.value);
      }

      function HandleYearChange(event) {
        setYear(event.target.value);
      }

      function HandleSubmit(e) {
        e.preventDefault();
        const sumData = {
          title: title,
          cover_image: image,
          author: author,
          price: price,
          summary: summary,
          releaseDate: year,
        };
    
        fetch("http://localhost:4000/posts",{
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(sumData),
        });
    
        setAuthor("");
        setImage("");
        setSummary("");
        setTitle("");
        setYear("");
        setPrice("");
      }

  return (
    <form className="add-form" onSubmit={HandleSubmit}>
    <div className="form-control">
        <label>Title</label>
        <input  placeholder="Title" required
        onChange={HandleTitleChange}
        value={title}
    />
    </div>
    <div className="form-control">
        <label>Author</label>
        <input  placeholder="Author" required
        onChange={HandleAuthorChange}
        value={author}
    />
    </div>
    <div className="form-control">
        <label>image</label>
        <input  placeholder="Add image"
        onChange={HandleImageChange} 
        value={image}
    />
    </div>

    <div className="form-control">
        <label>price</label>
        <input  placeholder="Add image"
        onChange={HandlePriceChange} 
        value={price}
    />
    </div>

    <div className="form-control">
        <label>year</label>
        <input  placeholder="Year" required
        onChange={HandleYearChange}
        value={year}
    />
    </div>
    
    <div className="form-control">
        <label>summary</label>
        <textarea
        placeholder="Write your summary here..."
        rows={10}
        required
        onChange={HandleSummaryChange}
        value={summary}
      />
        </div>
    <input type='submit' value='Share your summary' className="btn-block"/>
</form>
  )
}

export default ServiceForm;