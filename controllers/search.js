const mongoose = require('mongoose');
const hotelsModel = require("../database_seeds/models/hotels");
const url = require("../env_variables/env_vars.json").mongoosePort;

mongoose.connect(url)

var HotelsArray = []
class Search{
   search = async(req, res, next) => {
    try {
      const search_field  = req.body.name;
      const search_value  = req.body.value;
      const queryObj = {};

    if (search_field !== '' && search_value !== '') {
      queryObj[search_field] = search_value;
    }
        HotelsArray = await hotelsModel.find(queryObj,"city name").exec();
         HotelsArray = [...HotelsArray.map(({name,city})=> {
            return {name,city};

          })];  
        console.log(HotelsArray);
        res.json(HotelsArray);

        next()
    } catch {
        next()
        return 'error ocurred'
    }
}
}
   module.exports = new Search;

// exports.search = async (req, res) => {
//   try {
//     // get search_criteria from query parameter
//     // build a query object with it
//     // send data to the frontend

//     const { search_field, search_value } = req.query;

//     const queryObj = {};

//     if (search_field !== '' && search_value !== '') {
//       queryObj[search_field] = search_value;
//     }

//     console.log('::queryObj:::', queryObj);

//     const hotels = await hotelsModel.find({city: 'Abu Simbel'}).exec;
// console.log(hotels);
//     if (!hotels) {
//       return res.status(404).json({
//         status: 'failure',
//         message: `hotels with the given ${search_field}:${search_value} not found`
//       });
//     }

//     res.status(200).json({
//       status: 'success',
//       data: hotels
//     });
//   } catch (error) {
//     res.status(500).json({
//       status: 'failure',
//       error: error.message
//     });
//   }
//};
  

 
