import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {

    const { id ,name, img , description } = service;
    return (
        <section className="container-fluid col-lg-4 col-12">
            <div className="p-4">
            <div className="service">
            
            <div>
                <img className="img-fluid p-3 w-100" src={img} alt="" />
            </div>

            <div className="p-3">
            <h3 className="fw-bold">{name}</h3>
            <p className="px-3">{description}</p>
            <Link to={`/moreservice/${id}`}>
            <button type="button" className="btn btn-dark">View More</button>
            </Link>
            </div>
        </div>
            </div>
        </section>
    );
};

export default Service;