import React, { useState } from 'react';
import axios from 'axios';



const Search = () => {

    const [rdata, rsetdata] = useState([]);
    const[Latitude,setLet] = useState();
    const[Longtitud,Longset] = useState();
    
    
    const data = () => {
        console.log('array',Latitude)
        axios.post("http://localhost:5000/geocode", {
            
            "Latitude": Latitude,
            "Logtitude": Longtitud
        })
        
            .then(res => {
                console.log(res.data.location_suggestions)
                rsetdata(res.data.location_suggestions)

            })
            .catch(err => {
                console.log(err); throw err;
            })
    }
    

    const Lat = (event) => {
        setLet(event.target.value)
        console.log(Latitude)
    }
    
    const Long=(event)=>{
        Longset(event.target.value)
    }

    return (

        <>
            <div className="container h-100">
                <div className="d-flex justify-content-center h-100">
                    <div className="searchbar">
                        Longitud::
                        <input className="search_input" type="text" name={Longtitud} onChange={Long}/>
                        Latitude::
                        <input className="search_input" type="text" name={Latitude} onChange={Lat} />
                        <button className='search_button' onClick={data}> Search👍</button>
                    </div>
                    </div>
                </div>
  
            {rdata.map((val, index) => {
                return (
                    <>
                        <div className="cards">
                            <div className="card" >
                                <img src={val.country_flag_url} className="card-img-top" alt="resturant image" />
                                <div className="card-body">
                                    <h5 className="card-title">{val.country_name}</h5>
                                    <p className="card-text">{val.name}</p>
                                    <a to="/" className="btn btn-dark">Go somewhere</a>
                                </div>
                            </div>
                        </div>

                    </>
                )
            })}




        </>
    );
};

export default Search;

