import React, { useState } from 'react';
import gallery1 from "../Components/assets/Gallery/gallery-1.jpg"
import gallery2 from "../Components/assets/Gallery/gallery-2.jpg"
import gallery3 from "../Components/assets/Gallery/gallery-3.jpg"
import gallery4 from "../Components/assets/Gallery/gallery-4.jpg"
import gallery5 from "../Components/assets/Gallery/gallery-5.jpg"
import gallery6 from "../Components/assets/Gallery/gallery-6.jpg"

const Gallery = () => {
    const [filter, setFilter] = useState('all');

    const imagesData = [
        { id: 1, img: gallery1, category: 'events' },
        { id: 2, img: gallery2, category: 'products' },
        { id: 3, img: gallery3, category: 'events' },
        { id: 4, img: gallery4, category: 'products' },
        { id: 5, img: gallery5, category: 'events' },
        { id: 6, img: gallery6, category: 'products' },
    ];

    const filteredImages = filter === 'all' ? imagesData : imagesData.filter(image => image.category === filter);

    return (
        <section className='gallery-container'>
            <div className='gallery-main container'>
               <div className='ourblogs-main-info-main'>
                    <h1>
                        Our <span>Gallery</span>
                    </h1>
                </div>
            <div className="gallery ">
             
                {/* <div className="filter-buttons">
                    <button className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>All</button>
                    <button className={filter === 'events' ? 'active' : ''} onClick={() => setFilter('events')}>Events</button>
                    <button className={filter === 'products' ? 'active' : ''} onClick={() => setFilter('products')}>Products</button>
                </div> */}
                <div className="row gallery-img">
                    {filteredImages.map((image, index) => (
                        <div key={index} className="col-lg-4 col-md-6">
                            <div className="image-container">
                                <img className='img-fluid' src={image.img} alt={`Image ${image.id}`} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            </div>
        </section>

    );
};

export default Gallery;
