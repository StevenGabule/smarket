const multer = require("multer");
const fs = require("fs");
const path = require("path");

exports.rootProductFile = ((req, res, next) => {
  const getFileType = (file) => {
    const mimeType = file.mimetype.split("/");
    return mimeType[mimeType.length - 1];
  };

  const generateFileName = (req, file, cb) => {
    const extension = getFileType(file);
    const filename = Date.now() + "-" + Math.round(Math.random() + 1e9) + "." + extension;
    cb(null, file.fieldname + "-" + filename);
  };

  const fileFilter = (req, file, cb) => {
    const extension = getFileType(file);
    const allowedType = /jpeg|jpg|png/;
    const passed = allowedType.test(extension);
    if (passed) {
      return cb(null, true);
    }
    return cb(null, false);
  };

  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      const dest = `uploads/root/product`;
      fs.access(dest, (error) => {
        // file doesn't exists
        if (error) {
          return fs.mkdir(dest, (error) => {
            cb(error, dest);
          });
        } else {
          fs.readdir(dest, (error, files) => {
            if (error) throw error;
            /*for (const file of files) {
              fs.unlink(path.join(dest, file), (error) => {
                if (error) throw error;
              });
            }*/
          });
          return cb(null, dest);
        }
      });
    },
    filename: generateFileName,
  });
  return multer({storage, fileFilter}).single("image");
})();
