import React from 'react'
import TextField from '@mui/material/TextField';

const Contact = () => {
    return (
        <>
            <div className="container my-5">
                <div className="row">
                    <div className="col">
                        <p className='contactHeader'><span className='contactHeaderInner'>Contact</span> Us</p>
                    </div>
                </div>
                <div className="row justify-content-center align-items-center flex-md-row flex-column-reverse">
                    <div className="col-md-6 col-12">
                        <div className='ContactBox'>
                            <TextField id="filled-basic" label="Enter Your Name" variant="filled" className='contactField' />
                            <TextField id="filled-basic" label="Enter Your Email" variant="filled" className='contactField my-3' />
                            <div class="form-floating">
                                <textarea className="form-control commentField" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "100px" }}></textarea>
                                <label for="floatingTextarea2">Write Your Query ...</label>
                            </div>
                            <button className='contactBtn'>Send</button>
                        </div>
                    </div>
                    <div className="col-md-6 col-12">
                        <img src="/images/contact.png" alt="contactImg" className="img-fluid" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;