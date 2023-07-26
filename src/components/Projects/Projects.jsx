import React, { useState } from 'react'
import MedsuiteImage from "../../assets/Medsuite.png"
import FaceImage from "../../assets/face.png"
import ScraperImage from "../../assets/scraper.png"
import './projects.css'

const Projects = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }
     
  return (
    <section className="projects section" id="projects">
        <h2 className="section__title">Projects</h2>
        <span className="section__subtitle">Projects I have done in the last year</span>

        <div className="projects__container container grid">
            <div className="projects__content">
                <div>
                    <img src={MedsuiteImage} alt="Medsuite Icon" className="projects__image" />
                    <h3 className="projects__title">
                        Medsuite
                    </h3>
                </div>

                <span onClick={() => toggleTab(1)}
                    className="projects__button">
                        View
                <i className='uil uil-arrow-right
                projects__button-icon'></i></span>

                <div className={toggleState === 1 ? "projects__modal active-modal" : "projects__modal"}>
                    <div className="projects__modal-content">
                        <i onClick={() => toggleTab(0)} className='uil uil-times
                        projects__modal-close'></i>

                        <h3 className="projects__modal-title">
                            Medsuite (Hospital Management System)
                        </h3>

                        <div>
                            <img src={MedsuiteImage} alt="Medsuite Icon" className="projects__image-inner" />
                        </div>

                        <ul className="projects__modal-projects grid">
                            <li className="projects__modal-project">
                                <i className='uil uil-check-circle
                                projects__modal-icon'></i>
                                <p className="projects__modal-info">
                                    Collectively worked in a team to design mock-up pages for the website using Figma.
                                </p>
                            </li>

                            <li className="projects__modal-project">
                                <i className='uil uil-check-circle
                                projects__modal-icon'></i>
                                <p className="projects__modal-info">
                                    Implemented key features and components for the application using React.
                                </p>
                            </li>

                            <li className="projects__modal-project">
                                <i className='uil uil-check-circle
                                projects__modal-icon'></i>
                                <p className="projects__modal-info">
                                    Project was structured using the Scrum framework, which allowed us to work efficiently in a team of 8 members
                                    and complete the project within 10 weeks.
                                </p>
                            </li>

                            <li className="projects__modal-project">
                                <i className='uil uil-check-circle
                                projects__modal-icon'></i>
                                <p className="projects__modal-info">
                                    Sign in with admin@admin.com and password: adminadmin
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>


            <div className="projects__content">
                <div>
                    <img src={FaceImage} alt="Medsuite Icon" className="projects__image" />
                    <h3 className="projects__title">
                        Face Detection App
                    </h3>
                </div>

                <span onClick={() => toggleTab(2)}
                    className="projects__button">View
                <i className='uil uil-arrow-right
                projects__button-icon'></i></span>

                <div className={toggleState === 2 ? "projects__modal active-modal" : "projects__modal"}>
                    <div className="projects__modal-content">
                        <i onClick={() => toggleTab(0)} 
                        className='uil uil-times
                        projects__modal-close'></i>

                        <h3 className="projects__modal-title">
                            Face Detection App
                        </h3>

                        <div>
                            <img src={FaceImage} alt="Medsuite Icon" className="projects__image-inner" />
                        </div>

                        <ul className="projects__modal-projects grid">
                            <li className="projects__modal-project">
                                <i className='uil uil-check-circle
                                projects__modal-icon'></i>
                                <p className="projects__modal-info">
                                    Developed full stack face detection app using Clarifai’s face detection API, and React for the frontend.
                                </p>
                            </li>

                            <li className="projects__modal-project">
                                <i className='uil uil-check-circle
                                projects__modal-icon'></i>
                                <p className="projects__modal-info">
                                    Implemented server side using Node and Express.
                                </p>
                            </li>

                            <li className="projects__modal-project">
                                <i className='uil uil-check-circle
                                projects__modal-icon'></i>
                                <p className="projects__modal-info">
                                    Created database using PostgreSQL to store user’s sign in credentials and number of faces detected.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="projects__content">
                <div>
                    <img src={ScraperImage} alt="Medsuite Icon" className="projects__image" />
                    <h3 className="projects__title">
                        YouTube Scraper
                    </h3>
                </div>

                <span className="projects__button" onClick={() => 
                    toggleTab(3)}>View
                <i className='uil uil-arrow-right
                projects__button-icon'></i></span>

                <div className={toggleState === 3 ? "projects__modal active-modal" : "projects__modal"}>
                    <div className="projects__modal-content">
                        <i onClick={() => toggleTab(0)} className='uil uil-times
                        projects__modal-close'></i>

                        <h3 className="projects__modal-title">
                            Top 10 Trending Videos Scraper
                        </h3>

                        <div>
                            <img src={ScraperImage} alt="Medsuite Icon" className="projects__image-inner" />
                        </div>

                        <ul className="projects__modal-projects grid">
                            <li className="projects__modal-project">
                                <i className='uil uil-check-circle
                                projects__modal-icon'></i>
                                <p className="projects__modal-info">
                                    Developed a Selenium data scraper to fetch top 10 trending videos from the YouTube trending page.
                                </p>
                            </li>

                            <li className="projects__modal-project">
                                <i className='uil uil-check-circle
                                projects__modal-icon'></i>
                                <p className="projects__modal-info">
                                    Utilized Python’s pandas library to store data into a CSV file.
                                </p>
                            </li>

                            <li className="projects__modal-project">
                                <i className='uil uil-check-circle
                                projects__modal-icon'></i>
                                <p className="projects__modal-info">
                                    Hosted the scraper model using AWS lambda’s server-less technology to automate emailing scraped data to the user
                                    every 24 hours.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Projects