const { func } = require('joi');
const mongoose = require('mongoose');

const userDetailsSchema = new mongoose.Schema({
    username: {type: String, required: true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    age: {type: Number, required: true},
    userDescription: {type: String, required: true},
    userType: {type:String, required: true, enum:['Student','Alumni']}, // Student or Alumni
    yearOfPassing: {type: Number, required: true},
    currentYear: {type: Number, required: function(){return this.userType === 'Student'}},
    branch: {type: String, required: true},
    fieldsOfInterest: {type: [String], required: function(){return this.userType === 'Student'}},
    proficiency: {type: [String], required: function(){return this.userType === 'Student'}},
    currentField: {type: String, required: function(){return this.userType === 'Alumni'}},
    workExperience: {type: Number, required: function(){return this.userType === 'Alumni'}},
    currentEmployment: {type: String, required: function(){return this.userType === 'Alumni'}},
    linkedinProfile: {type: String, required: true},
    profilepic: {type: String, required: true}
});

const UserDetails= mongoose.model('UserDetails', userDetailsSchema);

module.exports = UserDetails;