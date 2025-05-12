const multer = require('multer');
const crypto = require('crypto');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../public/images/uploads')); // Correct relative path
  },
  filename: function (req, file, cb) {
    crypto.randomBytes(12, function(err, name){
      if (err) return cb(err);
      const fn  = name.toString("hex") + path.extname(file.originalname);
      cb(null, file.fieldname + '-' + fn);
    });
  }
});

const upload = multer({ storage: storage });

module.exports = upload; // Export the upload variable