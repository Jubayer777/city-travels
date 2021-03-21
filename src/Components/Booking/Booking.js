import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import './Booking.css';
import { useParams } from 'react-router';
import fackeData from '../../fackeData/Data.json';
import GMap from '../GMap/GMap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserFriends, faDollarSign,faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

const Booking = () => {
    const {transportName}=useParams();
    const [transport, setTransport]=useState([]);
    useEffect(()=>{
          const TransportInfo=fackeData.find(transport=>transport.name===transportName);
          setTransport(TransportInfo);
    }, [transportName]);
    const {name,img,person,price}=transport;
    
    const [isForm,setIsForm]=useState(true);
    const handleSearch=()=>{
        setIsForm(false);
    }

    return (
        <div className="booking-body">
        
                <Header></Header>
                    <div className="row">
                        <div className="col-md-5 booking-area">
                            <div id='booking-card' className="card  " style={{width:'20rem'}}>
                                
                                {
                                    isForm ?<div id="pickup-form">
                                                <form onSubmit={handleSearch}>
                                                    <label>Pick From</label>
                                                    <input type="text" id="pick-from" name="pick-from" placeholder="Mirpur-1" required/>
                                                    <br/>
                                                    <label>Pick To</label>
                                                    <input type="text" id="pick-to" name="pick-to" placeholder="Dhanmondi" required/>
                                                    <br/>
                                                    <label>Date</label>
                                                    <input type="date" name="ride-date" required />
                                                    <br/>
                                                    <label>Time</label>
                                                    <input type="time" name="ride-time" required/>
                                                    <br/>
                                                    <input id="search-btn" type="submit" value="Search"/>
                                                </form>
                                        </div>
                                    : <div>
                                            <div id="route-area">
                                                <h5><FontAwesomeIcon icon={faMapMarkerAlt} /> {document.getElementById('pick-from').value}</h5>
                                                <br/>
                                                <h5><FontAwesomeIcon icon={faMapMarkerAlt} /> {document.getElementById('pick-to').value}</h5>
                                            </div>
                                            <div id="transport-area" className="row d-flex justify-content-around">
                            
                                                <img src={img} alt=""/>
                                                <p>{name}</p>
                                                <p><FontAwesomeIcon icon={faUserFriends} /> {person}</p>
                                                <p><FontAwesomeIcon icon={faDollarSign} /> {price}</p>
                                            </div>
                                            <div id="transport-area" className="row d-flex justify-content-around">
                            
                                                <img src={img} alt=""/>
                                                <p>{name}</p>
                                                <p><FontAwesomeIcon icon={faUserFriends} /> {person}</p>
                                                <p><FontAwesomeIcon icon={faDollarSign} /> {price}</p>
                                            </div>
                                            <div id="transport-area" className="row d-flex justify-content-around">
                            
                                                <img src={img} alt=""/>
                                                <p>{name}</p>
                                                <p><FontAwesomeIcon icon={faUserFriends} /> {person}</p>
                                                <p><FontAwesomeIcon icon={faDollarSign} /> {price}</p>
                                            </div>
                                    </div>
                                }
                                
                            </div>
                        
                        </div>
                        <div className="col map-container"> 
                            <div  className="card map" >
                                <GMap></GMap>
                            </div>
                            
                        </div>

                   
           </div>
        </div>
    );
};

export default Booking;