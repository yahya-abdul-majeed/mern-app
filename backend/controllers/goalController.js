const asyncHandler = require('express-async-handler')

//Get goals
//GET /api/goals
//private
const getGoals = asyncHandler(
    async (req, res)=>{
    res.status(200).send('get goals')
    }
)
//Set goal
//POST /api/goals
//Private
const setGoal = asyncHandler(
    async (req, res)=>{
        if(!req.body.text){
            res.status(400)
            throw new Error('Please add a new text field') 
        }
        res.status(200).send('set goal')
    }
)

//Update goal
//PUT /api/goals/:id
//Private
const updateGoal = asyncHandler(
    async (req, res)=>{
        res.status(200).send('update goal')
    }
)

//delete goals
//DELETE /api/goals/:id
//private
const deleteGoal = asyncHandler(
    async (req, res)=>{
        res.status(200).send('delete goal')
    }
    
)
module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
}