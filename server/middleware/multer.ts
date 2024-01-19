import multer from "multer";

const storage = multer.diskStorage({
  // destination: function (req, file, cb) {
  //   cb(null, "uploads/"); // Spécifiez le dossier où stocker les images
  // },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

export default upload;
