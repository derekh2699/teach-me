const mongoose = require('mongoose');

/*
const testclassSchema = new mongoose.Schema ({
    name: String,
    price: Number,
    Rating: Number,
    instructor: String
});

const Testclass =  mongoose.model('Testclass', testclassSchema);
*/

const InstructorSchema = new mongoose.Schema ({
    userID: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    introduction: String,
    credentials: String,
    rating: Number,
    sumOfRating: Number,
    numOfRating: Number
})

const classSchema = new mongoose.Schema ({
    name: String,
    about: String, //long description of the class
    description: String, //short description of the class
    price: Number,
    proposedSchedule: String,
    instructor: {type: mongoose.Schema.Types.ObjectId, ref: 'Instructor'},
    category: String,
    rating: Number,
    sumOfRating: Number,
    numOfRating: Number
});

const userClassSchema = new mongoose.Schema ({
    userID: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    classID: {type: mongoose.Schema.Types.ObjectId, ref: 'Class'},
    date: {
        type: Date,
        default: Date.now
    }
})

const Class =  mongoose.model('Class', classSchema);
const Instructor = mongoose.model('Instructor', InstructorSchema);
const UserClass = mongoose.model('UserClass', userClassSchema);

const dbconf = process.env.DB_URI;
mongoose.connect(dbconf, { useNewUrlParser: true });


