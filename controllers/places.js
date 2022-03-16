const placesModel = require('../database_seeds/models/places')


var placesArray = []
var gen_nums = []
var randomPlaces = []

class places {
    async getPlacesData() {
        try {
            placesArray = await placesModel.find({}).lean()
            return placesArray
        } catch {
            return 'error ocurred'
        }
    }

    in_array(array, el) {
        for (let i = 0; i < array.length; i++)
            if (array[i] == el) return true
        return false;
    }

    get_rand(array) {
        let rand = Math.floor(Math.random() * (array.length - 0) + 0);
        if (!(this.in_array(gen_nums, rand))) {
            gen_nums.push(rand);
            return rand;
        }
        return this.get_rand(array);
    }

    async homePlaces() {
        try {
            let data = await this.getPlacesData()
            gen_nums = []
            randomPlaces = []
            for (let i = 0; i < 10; i++) {
                this.get_rand(data);
            }
            for (let j = 0; j < gen_nums.length; j++) {
                randomPlaces.push(data[gen_nums[j]])
            }
            randomPlaces = [...randomPlaces.map(({ name, images, type }) => {
                return { name, images, type };
            })];
        } catch {
            return 'error ocurred'
        }
        return randomPlaces
    }

}


module.exports = new places