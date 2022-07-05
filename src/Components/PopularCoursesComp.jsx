import React from 'react'

const PopularCoursesComp = ({ headerMainTitle, headerSubTitle, imgSrc }) => {
    return (
        <div className='d-flex popularCoursesBox justify-content-center align-items-center'>
            <div><img src={imgSrc} alt='popularCoursesImg' /></div>
            <div className='text-center mx-4'>
                <p className='mainAreaContentHeader'>{headerMainTitle}</p>
                <p>{headerSubTitle}</p>
            </div>
        </div>
    )
}

export default PopularCoursesComp