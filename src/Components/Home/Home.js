//imported file list
import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Transport from '../Transport/Transport';
import fackeData from '../../fackeData/Data.json';
import './Home.css';

const Home = () => {
    const [transport, setTransport]=useState([]);
   // Fatching transport fackeData
    useEffect(() => {
        setTransport(fackeData);
    }, []);
    return (
        <div className="home-bg">
             <Header></Header>
             <div className="row transport-container">
                {
                    transport.map(transport=><Transport key={transport.id} transport={transport}></Transport>)
                }
             </div>
        </div>
    );
};

export default Home;