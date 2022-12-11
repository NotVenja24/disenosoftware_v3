import React from 'react';

class Carousel extends React.component {
    render(){
        return(
            <div className='carousel-container'>
                <div className='carousel-item'>
                    <h1>Item 1 </h1>
                </div>
                <div className='carousel-item'>
                    <h1>Item 2 </h1>
                </div>
                <div className='carousel-item'>
                    <h1>Item 3 </h1>
                </div>
            </div>
        );
    }
}

export default Carousel;