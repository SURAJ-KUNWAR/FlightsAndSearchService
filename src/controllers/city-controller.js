const {CityService} = require("../services/index")

const cityService = new CityService();

const create = async (req, res) =>{
    try{
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data:city,
            success : true,
            message : "Successfully created a city",
            err : {}
        })

    }catch(err){
        console.log(err)
        return res.status(500).json({
            data : {},
            success : false,
            message : "not able to create a city",
            err : err
        })
       
    }
}


const destroy = async(req,res) =>{
    try{
        const response = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data:response,
            success : true,
            message : "Successfully deleted a city",
            err : {}
        })

    }catch(err){
        console.log(err)
        return res.status(500).json({
            data : {},
            success : false,
            message : "not able to delete a city",
            err : err
        })
       
    }
}

const get = async(req,res) =>{
    try{
        const city = await cityService.getCity(req.params.id);
        return res.status(200).json({
            data:city,
            success : true,
            message : "Successfully fetched a city",
            err : {}
        })

    }catch(err){
        console.log(err)
        return res.status(500).json({
            data : {},
            success : false,
            message : "not able to fetch  a city",
            err : err
        })
       
    }
}

const update = async(req,res) =>{
    try{
        const city = await cityService.updateCity( req.body , req.params.id );
        return res.status(201).json({
            data:city,
            success : true,
            message : "Successfully updated a city",
            err : {}
        })

    }catch(err){
        console.log(err)
        return res.status(500).json({
            data : {},
            success : false,
            message : "not able to update a city",
            err : err
        })
       
    }
}

const getAll = async(req, res)=>{
    try {
        const cities = await cityService.getAllCities(req.query);
        return res.status(200).json({
            data:cities,
            success : true,
            message : "Successfully fetched all city",
            err : {}
        })
    } catch(err){
        console.log(err)
        return res.status(500).json({
            data : {},
            success : false,
            message : "not able to  fetch cities",
            err : err
        })
       
    }
}
module.exports = {
    create,
    destroy,
    get,
    update,
    getAll
}