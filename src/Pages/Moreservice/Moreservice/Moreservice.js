import React, { useEffect, useState } from 'react';
import './Moreservice.css';
import { useParams } from 'react-router';

const Moreservice = () => {
    const {serviceId}= useParams();
    const [detail ,setDetail] = useState([]);

    useEffect(( ) => {
        fetch('/services.json')
            .then(response => response.json())
            .then(data => {
                const item = data?.find(item => parseInt(item.id) === parseInt(serviceId));
                setDetail(item);
            });
    }, []);

    return (
        <div className="background">
            
            <h2 className="fw-bold p-5">{detail?.name}</h2>
            <img src={detail?.img} alt="" />
            <p className="fw-bold" >{detail?.description}</p>
            {/* <p className="fw-bold">{detail?.details}</p> */}
            
        </div>
    );
};

export default Moreservice;