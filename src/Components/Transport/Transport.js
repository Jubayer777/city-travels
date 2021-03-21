//imported file list
import { useHistory } from 'react-router';
import './Transport.css';


const Transport = (props) => {
    // Destructuring object transport comming from Home component
    const {name, img}=props.transport;
    //passing destination route
    const history=useHistory();
    const handleCard=(tranportName)=>{
       history.push(`/booking/${tranportName}`)
    }
    return (
        //card for displaying transport
        <div  className=" d-flex  justify-content-center col mt-4">
            <div onClick={()=>handleCard(name)} className="card " style={{width:'13rem',borderRadius:'10px'}}>
                <img id="vichele-img" src={img} alt="..."/>
                <div className="card-body">
                   <h5 className="card-title">{name}</h5>
                </div>
            </div>
         </div>
    );
};

export default Transport;