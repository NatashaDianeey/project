const jwt = require('jsonwebtoken');
const cloudinary = require('cloudinary').v2;
const JWT_SECRET = process.env.JWT_SECRET;

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
  })

module.exports = {
    createToken: (payload) => {
        const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '30d' });
        return token;
    },
    uploadFile: (tempFile) => {
        return new Promise((resolve, reject) => {
            cloudinary.uploader.upload(tempFile, (err, result) => {
            err ? reject(error) : resolve(result);
            })
        })
    }
}