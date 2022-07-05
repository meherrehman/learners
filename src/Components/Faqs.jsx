import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Faqs = () => {
    return (
        <>
            <div className="container my-5">
                <div className="row">
                    <div className="col">
                        <p className='faqsHeader'>Some <span className='faqsHeaderInner'>FAQ's</span></p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>Who should take an Online Course?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Students join our online courses for a variety of reasons and come from diverse backgrounds, professions, and age groups. With online courses
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>I am a high school student, can I join?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Courses are open to all students 18 years or older. If you are under 18 years old, please contact us to discuss further.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>Can I take more than one course at a time?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    If you are new to online learning, we recommend that you begin with one course. As our courses are offered frequently throughout the year, you can always come back and continue your studies with one or more topics.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography> When should I register?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Most courses are offered at least 3 times during the year. Certain courses can fill up quickly, so be sure to register early.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Faqs;