import React, { useEffect, useState } from 'react';
import Service from '../Home/Services/Service/Service';
import './Services.css';


const Services = () => {
    const [services , setServices] = useState([])
    useEffect(()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data=>setServices(data));
    },[])
    return (
        <div id="services" style={{width: '100vw'}} className="service-container">
            <h1 className="mt-5 pt-5 fw-bold">Our Services</h1>
            <div className="row">
            {
                services.map(service =><Service
                key={service.id}
                service={service}
                ></Service>)
            }
            </div>
            
        </div>
    );
};

export default Services;