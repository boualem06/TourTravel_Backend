const cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name: "dc7suzbrg",
    api_key: "195482499927276",
    api_secret: "5crQ-0ZeG27t5m5pI-Y9w8pgG3s",
});

module.exports = { cloudinary };