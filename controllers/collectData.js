const place = require("./places")
const restaurant = require("./restaurants")
const hotel = require("./hotels")
const attraction = require('./attractions')

function parseArray(array) {
    array = [...array.map((obj) => {
        obj.images = JSON.parse(obj.images.replaceAll(`'`, `"`))
        return obj;
    })];
}

async function collectData(req, res, next) {
    console.log("start")
    console.log("places")
    var placeData = await place.homePlaces()
    parseArray(placeData)
    console.log("restaurants")
    var restaurantData = await restaurant.getMostPopular()
    parseArray(restaurantData)
    console.log("hotels")
    var hotelData = await hotel.getMostPopular()
    parseArray(hotelData)
    console.log("attractions")
    var attractionData = await attraction.getMostPopular()
    parseArray(attractionData)
    res.json({ placeData, restaurantData, attractionData, hotelData })
    next()
}


module.exports = { collectData }