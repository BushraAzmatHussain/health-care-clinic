import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Moreservice = () => {
   
    const [detail ,setDetail] = useState([]);
    const {serviceId}= useParams();
    useEffect (()=>{
        fetch('/servicedetail.json')
        .then(res => res.json())
        .then(data => setDetail(data));
    },[]);
    const clickedId = detail.find(
        (service) => service.id === parseInt(serviceId) 
    );
    console.log(clickedId?.detail);
    return (
        <div>
            <p>{clickedId?.detail}</p>
            <h1>More Information</h1>
            
            
        </div>
    );
};

export default Moreservice;