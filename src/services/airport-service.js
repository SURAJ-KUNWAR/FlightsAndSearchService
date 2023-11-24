
const {AirportRepository} = require('../repository/index')

class AirportService {
    constructor(){
        this.airportRepository = new AirportRepository();
    }
    async createAirport (data){
        try {
            const airport  = await  this.airportRepository.createAirport(data)
            return airport
        } catch (error) {
            console.log("something went wrong in airport service")
            throw {error}
        }
    }
    async getAirport (airportId){
        try {
            const airport  = await  this.airportRepository.getAirport(airportId)
            return airport
        } catch (error) {
            console.log("something went wrong in airport service")
            throw {error}
        }
    }

    async updateAirport (data , airportId){
        try {
            const airport  = await  this.airportRepository.updateAirport(data , airportId)
            return airport
        } catch (error) {
            console.log("something went wrong in airport service")
            throw {error}
        }
    }

    async deleteAirport (airportId){
        try {
        const response = await  this.airportRepository.deleteAirport(airportId)
         return response
        } catch (error) {
            console.log("something went wrong in airport service")
            throw {error}
        }
        }
    }

    module.exports = AirportService