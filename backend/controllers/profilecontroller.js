const UserDetails = require('../models/UserDetails');
const User = require('../models/User').User;
const cloudinary = require('cloudinary').v2;
const jwt = require('jsonwebtoken');
require("dotenv");

const uploadImage = (fileBuffer) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream({ folder: 'Profilepic' }, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result.secure_url);
      }
    });

    stream.end(fileBuffer);
  });
};

module.exports.createUserProfile = async (req, res) => {
  
  if (!req.file) {
    return res.status(400).json({ error: 'Please upload a file' });
  }

  try {
    // Access the file buffer from the request
    const fileBuffer = req.file.buffer;

    // Use the uploadImage function to get the Cloudinary URL
    const profilePicUrl = await uploadImage(fileBuffer);

    // Destructure other properties from req.body
    const {
      username,
      firstName,
      lastName,
      age,
      userDescription,
      userType,
      yearOfPassing,
      currentYear,
      branch,
      fieldsOfInterest,
      proficiency,
      currentField,
      workExperience,
      currentEmployment,
      linkedinProfile,
    } = req.body;

    // Create a new user profile including the Cloudinary URL
    const newUserProfile = await UserDetails.create({
      username,
      firstName,
      lastName,
      age,
      userDescription,
      userType,
      yearOfPassing,
      currentYear,
      branch,
      fieldsOfInterest,
      proficiency,
      currentField,
      workExperience,
      currentEmployment,
      linkedinProfile,
      profilepic: profilePicUrl, // Include the Cloudinary URL
    });

    // Update the associated User model by pushing the newUserProfile's ID
    const decodedToken = jwt.verify(req.headers['x-auth-token'], process.env.JWTPRIVATEKEY);

    try {
      if (!decodedToken || !decodedToken._id) {
        return res.status(401).json({ error: 'Invalid token' });
      }
    
      // Update the associated User model by pushing the newUserProfile's ID
      console.log(decodedToken._id)
      await User.findByIdAndUpdate(
        decodedToken._id, // Find the user by decoded user ID
        { $push: { details: newUserProfile._id } }, // Push the new profile's ID to the 'details' array
        { new: true } // Return the updated document
      );
    
      // Continue with the rest of your logic...
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
