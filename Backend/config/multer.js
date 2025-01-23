const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination:(req,file, cb) => {
        cb(null, path.join(__dirname, '../uploads'))  //  cb=call back function
    }, 
    filename: (req, file, cb) =>{
        cb(null, file.originalname)
    }
})

exports.upload = multer({storage: storage})

