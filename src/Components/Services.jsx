import React from 'react'

const Services = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <p className='servicesHeader'>Our<span className='servicesHeaderInner'> Services</span> </p>
                    </div>
                </div>
                <div className="row justify-content-center align-items-center">
                    <div className="col-6">
                        <img src="/images/services.png" alt="serviceImg" className="img-fluid" />
                    </div>
                    <div className="col-6 text-center d-flex flex-column">
                        <h6 className='serviceItem'>Student's Learning Analytics</h6>
                        <h6 className='serviceItem'>Learning Delivery</h6>
                        <h6 className='serviceItem'>Learning Design And Production</h6>
                        <h6 className='serviceItem'>Market Insights And Analytics</h6>
                        <h6 className='serviceItem'>Student Advisory Support</h6>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services;