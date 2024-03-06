import multer from "multer";

//upload files 

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/temp")
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname); // Keep the original name of the uploaded file
    }
  })
  
 export const upload = multer({
     storage, })