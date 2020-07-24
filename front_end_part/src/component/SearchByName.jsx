import React, { useState } from 'react';
import axios from 'axios';



const Search = () => {

    const [rdata, rsetdata] = useState([]);

    const[City_name,setCity] = useState();
    
    
    const data = () => {

        axios.post("http://localhost:5000/searchByName", {
            City:City_name
        })
            .then(res => {
                console.log(res.data)
                rsetdata(res.data)

            })  
            .catch(err => {
                console.log(err); throw err;
            })
    }
    
    const City=(event)=>{
        setCity(event.target.value)
    }

    return (

        <>
            <div className="container h-100">
                <div className="d-flex justify-content-center h-100">
                    <div className="searchbar">
                        Enter City Name::
                        <input className="search_input" type="text" name={City_name} onChange={City}/>
                        <button className='search_button' onClick={data}> Search<span role="">👍</span></button>
                    </div>
                </div>
            </div>
  
            {rdata.map((val,index) => {
                
                return (
                    <>
                        <div className="cards">
                            {/* <li key={val.restaurant.res_id}></li> */}
                            <div className="card" >
                                <img src={val.restaurant.featured_image}className="card-img-top" alt="resturant image" />
                                <div className="card-body">
                                    <h5 className="card-title">{val.restaurant.cuisines}</h5>
                                    <p className="card-text">Resaurant Name: {val.restaurant.name}</p>
                                    <p className="card-text">price: {val.restaurant.average_cost_for_two}</p>
                                    <p className="card-text">Raing: {val.restaurant.user_rating.aggregate_rating}</p>
                                    <a href={val.restaurant.events_url} className="btn btn-dark">Check official Website</a>
                                        
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

