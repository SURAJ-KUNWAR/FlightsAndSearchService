
const {Airport} = require ("../models/index")
class AirportRepository {
    async createAirport ({name , address , cityId}) {
        try {
           
            const airport =await  Airport.create({name , address , cityId})
            return airport
        } catch (error) {
            console.log("Something went wrong in repository layer")
            throw{error}
        }
    }

    async deleteAirport (airportId) {
        try {
            await  Airport.destroy({
                where : {
                    id : airportId
                }
            })
        } catch (error) {
            console.log("Something went wrong in repository layer")
            throw{error}
        }
    }

    async getAirport (airportId) {
        try {
                        const airport = await Airport.findByPk(airportId)
            return airport 
        } catch (error) {
            console.log("Something went wrong in repository layer")
            throw{error}
        }
    }
    async updateAirport (data, airportId  ) {
        try {
            const airport = await Airport.findByPk(airportId)
            airport.name = data.name
            airport.cityId = data.cityId
            await airport.save()
            return airport
             
        } catch (error) {
            console.log("Something went wrong in repository layer")
            throw{error}
        }
    }



}

module.exports = AirportRepository