import React from 'react'
import PopularCoursesComp from './PopularCoursesComp'

const PopularCourses = () => {
    return (
        <>
            <div className="container my-5">
                <div className="row">
                    <div className="popularCoursesHeader">Explore Our <span className='popularCoursesHeaderInner'>Popular Courses</span></div>
                </div>
                <div className="row my-4">
                    <div className="col d-flex justify-content-around flex-wrap">
                        <PopularCoursesComp headerMainTitle="Web Development" headerSubTitle="Improve Your Business" imgSrc="https://img.icons8.com/pastel-glyph/30/FA5252/web--v1.png" />
                        <PopularCoursesComp headerMainTitle="UI And UX" headerSubTitle="Fun And Challenging" imgSrc="https://img.icons8.com/ios-filled/40/FA5252/design--v1.png" />
                        <PopularCoursesComp headerMainTitle="App Development" headerSubTitle="Make Life Easier" imgSrc="https://img.icons8.com/fluency-systems-filled/45/FA5252/mobile-taxi-service.png" />
                    </div>
                </div>
                <div className="row justify-content-center align-items-center popularCoursesFooter">
                    <div className="col-6">
                        <p className='popularCoursesFooterHeader'>Online Courses From <span className='popularCoursesFooterHeaderInner'> Learners</span></p>
                        <button className='popularCoursesFooterBtn'>Find Out More</button>
                    </div>
                    <div className="col-6 text-end">
                        <img src="/images/popularCourses.png" alt="popularCourseSideImg" className="img-fluid" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default PopularCourses