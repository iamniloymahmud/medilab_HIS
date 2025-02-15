const express = require("express");
const downloadRouter = express.Router();
const path = require("path");

downloadRouter.get("/:fileName", (req, res) => {
  const fileName = req.params.fileName;
  const filePath = path.join(__dirname,"..", "public", fileName); // Adjust path as needed

  // Ensure the file exists and send it for download
  res.download(filePath, fileName, (err) => {
    if (err) {
      console.error("Download error:", err);
      res.status(500).send("Error while downloading the file");
    }
  });
});

module.exports = {
  downloadRouter,
};