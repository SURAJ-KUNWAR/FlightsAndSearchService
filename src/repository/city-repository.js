const {City} = require('../models/index')

class CityRepository {
    async createCity ({name}){
        try{
            const city = await City.create({ name });
            return city;
        }catch(error){
            console.log("Something wnet wrong in city repository")
            throw{error}
        }
    }

    async deleteCity (cityId){
        try{
         await City.destroy({
            where : {
                id: cityId
            }
         })
        }catch(error){
            console.log("Something wnet wrong in city repository")
            throw {error}
        }
    }

    async getCity(cityId){
        try {
            const city  = City.findByPk(cityId)
            return city 
        }catch(err){
            console.log("Something wnet wrong in city repository")
            throw{err}
        }
    }


    async updateCity (data , cityId){
        try{
            const city = City.update (data , {where : {
                id : cityId
            }})
            return city
        }catch(err){
            console.log("Something wnet wrong in city repository")
            throw{err}
        }
        
    }
        
      
    
}

module.exports = CityRepository;