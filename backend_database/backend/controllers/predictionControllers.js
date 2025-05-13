
const cropRecommendationController = async(req , res) => {
    try {
        res.status(200).send({
            success : true , 
            message : 'test User Data API'
        })
    }
    catch(error){
        console.log('error in test api' , error) 
    }
} ;

const fertilizerRecommendationController = async(req , res) => {
    try {
        res.status(200).send({
            success : true , 
            message : 'test User Data API'
        })
    }
    catch(error){
        console.log('error in test api' , error) 
    }
}


const pestPredictionController = async(req , res) => {
    try {
        res.status(200).send({
            success : true , 
            message : 'test User Data API'
        })
    }
    catch(error){
        console.log('error in test api' , error) 
    }
} ;

const plantDiseasePredictionController = async(req , res) => {
    try {
        res.status(200).send({
            success : true , 
            message : 'test User Data API'
        })
    }
    catch(error){
        console.log('error in test api' , error) 
    }
} ;


module.exports = {
    cropRecommendationController, 
    fertilizerRecommendationController , 
    pestPredictionController , 
    plantDiseasePredictionController
} ;