const jwt = require("jsonwebtoken");

exports.login = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Parameter can not be empty!",
    });
    return;
  }
  const loginReq = {
    nik: req.body.nik,
    password: req.body.password,
  };
  // Construct the Basic Authentication header
  const base64Credentials = Buffer.from(
    `${process.env.BA_USERNAME}:${process.env.BA_PASSWORD}`
  ).toString("base64");
  const headers = {
    Authorization: `Basic ${base64Credentials}`,
    "Content-Type": "application/json", // Set the content type as needed
    // Add any other headers as necessary
  };

  // Define the URL you want to make a request to
  const url = process.env.LOGIN_URL;

  fetch(url, {
    method: "post",
    body: JSON.stringify(loginReq),
    headers: headers,
  })
    .then((res) => res.text())
    .then((json) => {
        const successResponse = {
            status: true,
            message: "Ok",
            token: jwt.sign({data:json}, process.env.JWT_SECRET,{ expiresIn: '1h' })
          };
          res.send(successResponse) 
    }
    )
    .catch((error) => {
      console.error("Fetch error:", error);
      res.status(500).send(error);
    });
};
