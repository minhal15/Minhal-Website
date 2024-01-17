import React, { useState } from 'react'
import MedsuiteImage from "../../assets/Medsuite.png"
import FaceImage from "../../assets/face.png"
import ScraperImage from "../../assets/scraper.png"
import Rnative from "../../assets/Rnative.png"
import Website from "../../assets/Website.png"
import MNS from "../../assets/mns.png"
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

                        <div className="projects__modal-title">
                            <a href="https://github.com/hmscps714/Hospital-Management-System" rel="noreferrer" className='home__social-icon' target="_blank">
                                <i className="bx bxl-github"></i>
                            </a>
                            Medsuite (Hospital Management System)
                            <a href="https://medsuite.netlify.app/" rel="noreferrer" className='home__social-icon' target="_blank">
                                <i className="bx bx-link"></i>
                            </a>
                        </div>

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

                        <div className="projects__modal-title">
                            <a href="https://github.com/minhal15/Face-detector" rel="noreferrer" className='home__social-icon' target="_blank">
                                <i className="bx bxl-github"></i>
                            </a>
                            Face Detection App
                            <a href="https://medsuite.netlify.app/" rel="noreferrer" className='home__social-icon' target="_blank">
                                <i className="bx bx-link"></i>
                            </a>
                        </div>

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
                    <img src={MNS} alt="Medsuite Icon" className="projects__image" />
                    <h3 className="projects__title">
                        Ecommerce Website
                    </h3>
                </div>

                <span className="projects__button" onClick={() => 
                    toggleTab(6)}>View
                <i className='uil uil-arrow-right
                projects__button-icon'></i></span>

                <div className={toggleState === 6 ? "projects__modal active-modal" : "projects__modal"}>
                    <div className="projects__modal-content">
                        <i onClick={() => toggleTab(0)} className='uil uil-times
                        projects__modal-close'></i>

                        <div className="projects__modal-title">
                            MNS Electronix, Founder and Web Developer
                        </div>

                        <div>
                            <img src={MNS} alt="Medsuite Icon" className="projects__image-inner" />
                        </div>

                        <ul className="projects__modal-projects grid">
                        <li className="projects__modal-project">
                                <i className='uil uil-check-circle
                                projects__modal-icon'></i>
                                <p className="projects__modal-info">
                                Designed and developed a responsive e-commerce website using WordPress, Themify, and WooCommerce.
                                </p>
                            </li>

                            <li className="projects__modal-project">
                                <i className='uil uil-check-circle
                                projects__modal-icon'></i>
                                <p className="projects__modal-info">
                                Integrated essential plugins such as Mailchimp, Themify Builder, and Stripe for seamless functionality.
                                </p>
                            </li>

                            <li className="projects__modal-project">
                                <i className='uil uil-check-circle
                                projects__modal-icon'></i>
                                <p className="projects__modal-info">
                                Utilized WordPress block tools to enhance the website’s layout and design.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="projects__content">
                <div>
                    <img src={Rnative} alt="Medsuite Icon" className="projects__image" />
                    <h3 className="projects__title">
                        App Security
                    </h3>
                </div>

                <span onClick={() => toggleTab(4)}
                    className="projects__button">
                        View
                <i className='uil uil-arrow-right
                projects__button-icon'></i></span>

                <div className={toggleState === 4 ? "projects__modal active-modal" : "projects__modal"}>
                    <div className="projects__modal-content">
                        <i onClick={() => toggleTab(0)} className='uil uil-times
                        projects__modal-close'></i>

                        <div className="projects__modal-title">
                           
                        Enhancing App Security with React Native for a Transit Company
                            
                        </div>

                        <div>
                            {/* <img src={MedsuiteImage} alt="Medsuite Icon" className="projects__image-inner" /> */}
                        </div>

                        <ul className="projects__modal-projects grid">
                            <li className="projects__modal-project">
                                {/* <i className='uil uil-check-circle projects__modal-icon'></i> */}
                                <p className="projects__modal-info">
                                    Key Achievements:<br />
                                    - Conducted in-depth security analysis and reverse engineering of the transit companies app.<br />
                                    - Discovered a critical bug that enabled unlimited ticket creation and unauthorized bus boarding.<br />
                                    - Employed ethical practices to responsibly disclose the security flaw to the company.<br /><br />
                                </p>
                            </li>

                            <li className="projects__modal-project">
                                {/* <i className='uil uil-check-circle projects__modal-icon'></i> */}
                                <p className="projects__modal-info">
                                    Approach<br />
                                    - Cloned the app to showcase how the vulnerability was bypassed without compromising user data.<br />
                                    - Demonstrated the significance of robust security measures in mobile app development.<br />
                                    - Respected the company's privacy by not disclosing their name or any sensitive information.<br />
                                    - More information will be available once bug is fixed.<br />
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

                        <div className="projects__modal-title">
                            <a href="https://github.com/minhal15/youtube-scrpaer-selenium" rel="noreferrer" className='home__social-icon' target="_blank">
                                <i className="bx bxl-github"></i>
                            </a>
                            Top 10 Trending Videos Scraper
                        </div>

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


            <div className="projects__content">
                <div>
                    <img src={Website} alt="Medsuite Icon" className="projects__image" />
                    <h3 className="projects__title">
                        Personal Website
                    </h3>
                </div>

                <span className="projects__button" onClick={() => 
                    toggleTab(5)}>View
                <i className='uil uil-arrow-right
                projects__button-icon'></i></span>

                <div className={toggleState === 5 ? "projects__modal active-modal" : "projects__modal"}>
                    <div className="projects__modal-content">
                        <i onClick={() => toggleTab(0)} className='uil uil-times
                        projects__modal-close'></i>

                        <div className="projects__modal-title">
                            <a href="https://github.com/minhal15/Minhal-Website" rel="noreferrer" className='home__social-icon' target="_blank">
                                <i className="bx bxl-github"></i>
                            </a>
                            Personal Portfolio Website
                        </div>

                        <div>
                            <img src={Website} alt="Medsuite Icon" className="projects__image-inner" />
                        </div>

                        <ul className="projects__modal-projects grid">
                            <li className="projects__modal-project">
                                <i className='uil uil-check-circle
                                projects__modal-icon'></i>
                                <p className="projects__modal-info">
                                    Not much to explain, just React and CSS! Click github link to see code
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