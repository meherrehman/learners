import React from 'react'

const Navbar = () => {
    return (
        <>
            <div className="container navbarBox">
                <div className="row justify-content-center align-items-center">
                    <div className="col-sm-2 col-12 text-center">
                        <p className='logoText'>Learners</p>
                    </div>
                    <div className="col-sm-10 col-12 d-flex justify-content-end  align-items center">
                        <div className="navItems">Home</div>
                        <div className="navItems">Features</div>
                        <div className="navItems">Pricing</div>
                        <div className="navItemsBtn">Get Started</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;