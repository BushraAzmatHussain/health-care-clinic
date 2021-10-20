import React from 'react';
import about from '../../images/Ent1.jpg';

const About = () => {
    return (
        <section id="about" className="container p-5 m-5">
            <h1 className="fw-bold text-primary">About Us</h1>
            <div className="col-lg-12 col-6">
                <img className="img-fluid p-5 m-5" src={about} alt="" />
            
            <div className="p-5 m-5 fw-bold text-primary">
                <h2 >We are commited to eccellent and complete patient care</h2>
                <h6>We are commited to eccellent and complete patient care.We welcome all of our patients as family, providing them with ENT care and support through medical journey. Our mission is to provide high quality, comprehensive treatment to patients of all ages and backgrounds.Our aim is to provide specialist care by drawing from the 10 plus years of experience . We work alongside of five otolaryngologists (ENT physicians).</h6>
            </div>
            </div>
        </section>
        
    );
};

export default About;