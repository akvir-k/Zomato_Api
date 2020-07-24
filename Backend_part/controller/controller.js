const client = require("../connection/connection")


exports.getCategories=(req,res)=>{

    client.getCategories(null, function(err, result){
    if(!err){
        console.log(result);
        res.send(result)
    }else {
       console.log(err);
    }
});
}

// exports.getCities=(req,res)=>{

//   console.log(req.data)

//     var data={
//         lat:"28.644800",
//         lon:"77.216721",
//         count:"2",
//         country_id:1,
//         country_name:"India"
        
//     }
//     client.getCities(
//         data,
//          function(err, result){
//             if(!err){
//               console.log(result);
//               res.send(result)
//             }else {
//               console.log(err);
//             }
//         });
// }


exports.geoCode=(req,res)=>{

    client.getGeocode({
        lat:"40.742051", //latitude
        lon:"77.209021" //longitude
        }, function(err, result){
            if(!err){
              console.log(result);
              res.send(result)
            }else {
              console.log(err);
            }
        });
        
}