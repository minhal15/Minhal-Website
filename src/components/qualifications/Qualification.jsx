import React, { useState } from 'react'
import "./qualification.css"

const Qualification = () => {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }
  return (
    <section className="qualification section" id='experience'>
        <h2 className="section__title">Education and Experience</h2>
        <span className="section__subtitle">My Personal Journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div 
                className={toggleState === 1 
                ? "qualification__button qualification__active button--flex" 
                : "qualification__button button--flex"
                }
                onClick={() => toggleTab(1)}
                >
                    <i className="uil uil-graduation-cap qualification__icon"></i> Education
                </div>

                <div className={toggleState === 2 
                ? "qualification__button qualification__active button--flex" 
                : "qualification__button button--flex"
                }
                onClick={() => toggleTab(2)}
                >
                    <i className="uil uil-briefcase qualification__icon"></i> Experience
                </div>

            </div>

            <div className="qualification__sections">
                <div 
                className={toggleState === 1 
                ? "qualification__content qualification__content-active" 
                : "qualification__content"
            }>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">BSC in Computer Science</h3>
                            <span className="qualification__subtitle">
                                Toronto Metropolitan University
                            </span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2020 - Present
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">The Complete Web Developer in 2023</h3>
                            <span className="qualification__subtitle">
                                Zero To Mastery (Udemy)
                            </span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2022 - Present
                            </div>
                        </div>

                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Full Stack Open Source Cohort</h3>
                            <span className="qualification__subtitle">
                                Harkirat Singh (100x Devs)
                            </span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> Jun 2023 - Present
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    
                </div>

                <div className={toggleState === 2 
                ? "qualification__content qualification__content-active" 
                : "qualification__content"
                     }>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">React Native Developer</h3>
                            <span className="qualification__subtitle">
                                HARKS
                            </span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> Jun 2023 - Present
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Full Stack Developer</h3>
                            <span className="qualification__subtitle">
                                Fibra
                            </span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> Feb 2023 - Jul 2023
                            </div>
                        </div>

                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Service Desk Analyst</h3>
                            <span className="qualification__subtitle">
                                Ontario Medical Association 
                            </span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> May 2023 - Present
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification