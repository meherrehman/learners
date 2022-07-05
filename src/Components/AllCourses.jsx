import React from 'react'
import AllCoursesComp from './AllCoursesComp';

const AllCourses = () => {
    return (
        <>
            <div className="container my-5">
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-6 col-12">
                        <p className="allCoursesHeader"><span className='allCoursesHeaderInner'>Online Courses</span> For You</p>
                    </div>
                    <div className="col-md-6 col-12 text-md-end text-center">
                        <button className='searchItem1'>All</button>
                        <button className='searchItem'>Web Development</button>
                        <button className='searchItem'>App Development</button>
                        <button className='searchItem'>Designing</button>
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col d-flex justify-content-around flex-wrap">
                        <AllCoursesComp imgSrc="/images/course1.jpg" category="Web Development" lectures="38" title="Lorem ipsum dolor sit amet." instructorName="Thapa" price="55" rating="4.5" />
                        <AllCoursesComp imgSrc="/images/course2.jpg" category="Web Development" lectures="44" title="Lorem ipsum dolor sit amet." instructorName="John Doe" price="53" rating="4.6" />
                        <AllCoursesComp imgSrc="/images/course3.jpg" category="App Development" lectures="47" title="Lorem ipsum dolor sit amet." instructorName="Kylie" price="75" rating="4.2" />
                        <AllCoursesComp imgSrc="/images/course4.jpg" category="UI / UX" lectures="32" title="Lorem ipsum dolor sit amet." instructorName="Karen" price="75" rating="3.7" />
                        <AllCoursesComp imgSrc="/images/course5.jpg" category="App Development" lectures="43" title="Lorem ipsum dolor sit amet." instructorName="Jenner" price="73" rating="4.6" />
                        <AllCoursesComp imgSrc="/images/course6.jpg" category="UI / UX" lectures="39" title="Lorem ipsum dolor sit amet." instructorName="Mike" price="78" rating="4.1" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AllCourses;