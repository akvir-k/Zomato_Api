
const controller=require('../controller/controller')
const client = require("../connection/connection")


module.exports=(router)=>{

    router
        .post('/geocode',(req,res)=>{
            
            console.log(req.body)
            var data={
                lat:req.body.Latitude,
                lon:req.body.Logtitude
            }
            console.log(data)
            client.getCities(
                data,
                 function(err, result){
                    if(!err){
                      console.log(result);
                      res.send(result)
                    }else {
                      console.log(err);
                    }
                });

        })

        .post('/searchByName',(req,res)=>{

          console.log(req.body)
          client.getLocations({
            query:req.body.City, // suggestion for location name
            count:"1" // number of maximum result to fetch
            }, function(err, result){

                if(!err){
                  console.log(result)
                  result= JSON.parse(result)
                  // console.log(result.location_suggestions[0])
                  se
                  client.getGeocode({
                    lat:result.location_suggestions[0].latitude, //latitude
                    lon:result.location_suggestions[0].longitude //longitude
                    }, function(err, result){
                        if(!err){
                          let resturant= JSON.parse(result)
                          console.log(resturant)
                          res.send(resturant.nearby_restaurants)
                          // console.log(resturant.nearby_restaurants[0].restaurant);
                        }else {
                          console.log(err);
                          res.send(err)
                        }
                    });
                  
                }else {
                  console.log(err);
                }
            });
        })

}

