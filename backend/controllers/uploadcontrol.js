const multer = require('multer');
const cloudinary = require('cloudinary').v2;

// Configure Cloudinary
cloudinary.config({
  cloud_name: 'dej2qschj',
  api_key: '659734115489456',
  api_secret: 'aiDKpa_1mQ859EiGEnwks-XPJaw',
});

// Set up Multer to store the file in memory
const upload = multer({ storage: multer.memoryStorage() });

module.exports = { upload };