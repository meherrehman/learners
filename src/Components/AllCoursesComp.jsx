import React from 'react'

const AllCoursesComp = ({ imgSrc, category, lectures, title, instructorName, price, rating }) => {
    return (
        <div className='AllCoursesBox'>
            <div className='imgSection'>
                <img src={imgSrc} alt="allCourseImg" className='AllCourseImg' />
            </div>
            <div className="row p-2">
                <div className="col-6 allCoursesCategory">{category}</div>
                <div className="col-6 text-end">{lectures} lectures</div>
            </div>
            <div className="row my-1">
                <div className="col justify-content-center align-items-center">
                    <img src="https://img.icons8.com/cotton/32/000000/rating.png" />
                    <span>{rating}</span>
                </div>
            </div>
            <p className='allCoursesTitle'>{title}</p>
            <div className="row my-1">
                <div className="col justify-content-center align-items-center">
                    <span>Offered By</span>
                    <span className='instructorName'> {instructorName}</span>
                </div>
            </div>
            <hr />
            <div className='pricingSection'>
                <div className="row p-2">
                    <div className="col-6">$ {price}</div>
                    <div className="col-6 text-center allCoursesBuyBtn">Buy</div>
                </div>
            </div>
        </div>
    )
}

export default AllCoursesComp;