const express = require('express')

const {
    cropRecommendationController , 
    fertilizerRecommendationController , 
    pestPredictionController , 
    plantDiseasePredictionController
} = require("../controllers/predictionControllers")

const router = express.Router() 

// routes 
// register || POST


router.post('/cropRecommendation' , cropRecommendationController) ;
router.post('/fertilizerRecommendation' , fertilizerRecommendationController) ;
router.post('/pestPrediction' , pestPredictionController) ;
router.post('/plantDiseasePrediction' , plantDiseasePredictionController) ;


// Exports the router instance so it can be used in other files
module.exports = router ; 
