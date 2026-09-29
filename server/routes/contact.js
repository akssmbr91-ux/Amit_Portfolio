const express = require("express");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, email and message are required"
      });
    }

    console.log("New Portfolio Contact:", { name, email, message });

    return res.status(200).json({
      success: true,
      message: "Thank you! Your message has been received."
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong"
    });
  }
});

module.exports = router;
