const mongoose = require("mongoose");
const Schema = mongoose.Schema;

 const WorkoutSchema = new Schema({
     exercises: [
        {
            type: {
                type: String,
                required: 'Input the type of workout'
            },
            name: {
                type: String,
                required: 'Input the name of workout'
            },
            duration: {
                type: Number,
                required: 'Input the duration of workout'
            },
            sets: {
                type: Number,
                required: 'Input the amount of sets'
            },
            reps: {
                type: Number,
                required: 'Input the amount of reps'
            },
            weight: {
                type: Number,
                required: 'Input the amount of weight'
            },
            distance: {
                type: Number,
                required: 'Input the distance of workout'
            },

        }
     ],
     day: {
        type: Date,
        default: Date.now
     }
 });

 const Workout = mongoose.model("Workout", WorkoutSchema);
 module.exports = Workout;