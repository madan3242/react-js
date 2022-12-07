import React, {useState, useEffect} from 'react'

const ProductCarousel = (props) => {

    let [images, setImages] = useState({image1: "", image2: "", image3: ""});
    useEffect(() => {
        setImages(props.images)
    })

  return (
    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <pre>{JSON.stringify(images)}</pre>
        <div className="carousel-inner">
            <div className="carousel-item active">
            <img src="" className="d-block w-100" alt="" />
            </div>
            <div className="carousel-item">
            <img src="" className="d-block w-100" alt="" />
            </div>
            <div className="carousel-item">
            <img src="" className="d-block w-100" alt="" />
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-target="#carouselExampleControls" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-target="#carouselExampleControls" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
        </button>
    </div>
  )
}

export default ProductCarousel