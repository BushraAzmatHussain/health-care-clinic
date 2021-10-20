import React from 'react';
import './Spacialist.css';

const Spacialist = ({spacialist}) => {
    const {img , name , degree } = spacialist;
    return (
        <section className="container-fluid col-lg-6 col-12 bg-sp-sec ">
            
            <div className="p-3 img-fluid w-100">
                 <img src={img} alt="" />
            </div>
            <h2 className="fw-bold">{name}</h2>
            <h6>{degree}</h6>
        
        </section>
    );
};

export default Spacialist;