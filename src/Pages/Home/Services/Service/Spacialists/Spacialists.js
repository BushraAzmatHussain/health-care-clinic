import React from 'react';

import S1 from '../../../../../images/Spacialists-img/S1.jpg';
import S2 from '../../../../../images/Spacialists-img/S2.jpg';
import S3 from '../../../../../images/Spacialists-img/S3.jpg';
import S4 from '../../../../../images/Spacialists-img/S4.jpg';
import S5 from '../../../../../images/Spacialists-img/S5.jpg';
import S6 from '../../../../../images/Spacialists-img/S6.jpg';
import Spacialist from '../Spacialist/Spacialist';

const spacialists = [
    {
        
        img: S1,
        name: 'Dr. Cameron Lewers',
        degree: 'MBBS, BSC(MED)(HONS), MS'
    },
    {
        
        img: S2,
        name: 'Dr. Ashley Hanigan',
        degree: 'MBBS, BSC(MED)(HONS), MS'
    },
    {
        
        img: S3,
        name: 'Dr. Alana Hopley',
        degree: 'MBBS, BSC(MED)(HONS), MS'
    },
    {
        
        img: S4,
        name: 'Dr. Roger Distefano',
        degree: 'MBBS, BSC(MED)(HONS), MS'
    },
    {
       
        img: S5,
        name: 'Dr. Alica Lavater',
        degree: 'MBBS, BSC(MED)(HONS), MS'
    },
    {
        img: S6,
        name: 'Dr. Simons Elwin',
        degree: 'MBBS, BSC(MED)(HONS), MS'
    }
]

const Spacialists = () => {
    return (
        <div id="spacialists" className="container-fluid row">
            

                <h1 className="p-5 text-primary fw-bold mt-5">Our Spacialists</h1>
                
                {
                    spacialists.map(spacialist => <Spacialist
                    key={spacialist.name}
                    spacialist={spacialist}
                    ></Spacialist>)
                }

            </div>
        
    );
};

export default Spacialists;