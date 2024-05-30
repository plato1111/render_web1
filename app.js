const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => res.type('html').send(html));

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Twelve - The Company</title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">
  <link rel="stylesheet" href="public/css/style.css">
</head>
<body>
    <div class="container d-flex flex-column justify-content-center align-items-center min-vh-100">
        <div class="logo mb-8 animate__animated animate__fadeInLeft">
          <img src="https://github.com/plato1111/render_web1/blob/main/public/images/profile.png" alt="" class="img-fluid rounded-circle">
        </div>
        <div class="company-name mb-2 animate__animated animate__fadeInRight">TWELVE.</div>
        <div class="subtitle mb-5 animate__animated animate__fadeInUp">THE COMPANY</div>
        <div class="button-container d-flex flex-column align-items-center">
          <a href="#" class="btn btn-outline-dark mb-3 animate__animated animate__fadeInUp">Visit our website</a>
          <a href="#" class="btn btn-outline-dark mb-3 animate__animated animate__fadeInUp">Get quote</a>
          <a href="#" class="btn btn-outline-dark mb-3 animate__animated animate__fadeInUp">References</a>
          <a href="page2.html" class="btn btn-outline-dark animate__animated animate__fadeInUp">Go to Page 2</a>
        </div>
      </div>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
  <script src="public/js/transitions.js"></script>
  <script src="script.js"></script>
</body>
</html>
`
