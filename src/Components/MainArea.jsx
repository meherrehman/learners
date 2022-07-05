import React from 'react'

const MainArea = () => {
    return (
        <div className="container my-5">
            <div className="row justify-content-center align-items-center">
                <div className="col-6">
                    <img src="https://img.icons8.com/ios-glyphs/30/FA5252/quote.png" alt='quoteImg' />
                    <p className='mainAreaQuote'>Education is the movement from darkness to light.</p>
                    <button className='mainAreaBtn'>Get Free Courses</button>
                </div>
                <div className="col-6">
                    <img src="/images/mainAreasideimg.png" alt="mainAreaImg" className="img-fluid" />
                </div>
            </div>
        </div>
    )
}

export default MainArea