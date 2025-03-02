const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static('public'));

app.get("/", (req, res) => res.type('html').send(html));
app.get("/page2", (req, res) => res.type('html').send(page2));

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
  <link rel="stylesheet" href="/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Poppins', sans-serif;
      background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
      color: #333;
      transition: all 0.8s ease;
    }
    body.dark-mode {
      background: linear-gradient(135deg, #2c3e50 0%, #1a1a1a 100%);
      color: #fafafa;
    }
    .logo img {
      max-width: 150px;
      height: auto;
      border: 3px solid #333;
      transition: all 0.5s ease;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
    body.dark-mode .logo img {
      border-color: #fafafa;
      box-shadow: 0 4px 8px rgba(255, 255, 255, 0.1);
    }
    .company-name {
      font-size: 3.5rem;
      font-weight: 700;
      letter-spacing: 0.1rem;
      color: #000;
      transition: all 0.5s ease;
    }
    body.dark-mode .company-name {
      color: #fafafa;
    }
    .subtitle {
      font-size: 2rem;
      font-weight: 300;
      color: #666;
      transition: all 0.5s ease;
    }
    body.dark-mode .subtitle {
      color: #aaa;
    }
    .btn-outline-dark {
      transition: all 0.5s ease;
      width: 200px;
    }
    body.dark-mode .btn-outline-dark {
      color: #fafafa;
      border-color: #fafafa;
    }
    .btn-outline-dark:hover {
      transform: translateY(-3px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
    body.dark-mode .btn-outline-dark:hover {
      background-color: #fafafa;
      color: #121212;
    }
    
    /* Switch styles */
    .switch {
      position: relative;
      display: inline-block;
      width: 60px;
      height: 34px;
      margin-bottom: 20px;
    }
    .switch input {
      opacity: 0;
      width: 0;
      height: 0;
    }
    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #ccc;
      transition: .4s;
      border-radius: 34px;
    }
    .slider:before {
      position: absolute;
      content: "\f185";
      font-family: 'Font Awesome 5 Free';
      font-weight: 900;
      height: 26px;
      width: 26px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      transition: .4s;
      border-radius: 50%;
      text-align: center;
      line-height: 26px;
    }
    input:checked + .slider {
      background-color: #2196F3;
    }
    input:checked + .slider:before {
      transform: translateX(26px);
      content: "\f186";
    }
    body.dark-mode .slider {
      background-color: #555;
    }
    body.dark-mode input:checked + .slider {
      background-color: #87CEEB;
    }

    /* Mobile Styles */
    @media (max-width: 768px) {
      .logo img {
        max-width: 100px;
      }
      .company-name {
        font-size: 2.5rem;
      }
      .subtitle {
        font-size: 1.5rem;
      }
      .btn-outline-dark {
        width: 80%;
        max-width: 200px;
      }
    }
  </style>
</head>
<body>
  <div class="container d-flex flex-column justify-content-center align-items-center min-vh-100">
    <label class="switch">
      <input type="checkbox" id="theme-toggle">
      <span class="slider"></span>
    </label>
    <div class="logo mb-4 animate__animated animate__fadeInLeft">
      <img src="https://raw.githubusercontent.com/plato1111/render_web1/main/public/js/profile.png" alt="Company Logo" class="img-fluid rounded-circle">
    </div>
    <div class="company-name mb-2 animate__animated animate__fadeInRight text-center">PATHFINDER PRO</div>
    <div class="subtitle mb-4 animate__animated animate__fadeInUp text-center">Orientación Vocacional</div>
    <div class="button-container d-flex flex-column align-items-center w-100">
      <a href="#" class="btn btn-outline-dark mb-3 animate__animated animate__fadeInUp">Visit our website</a>
      <a href="#" class="btn btn-outline-dark mb-3 animate__animated animate__fadeInUp">Get quote</a>
      <a href="#" class="btn btn-outline-dark mb-3 animate__animated animate__fadeInUp">References</a>
      <a href="/page2" class="btn btn-outline-dark animate__animated animate__fadeInUp">Go to Page 2</a>
    </div>
  </div>

  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
  <script>
    document.getElementById('theme-toggle').addEventListener('change', function() {
      document.body.classList.toggle('dark-mode');
      console.log('Theme toggled');
    });
  </script>
</body>
</html>
`

const page2 = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page 2</title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
  <link rel="stylesheet" href="css/style.css">
</head>
<body class="page2">
  <div class="container d-flex flex-column justify-content-center align-items-center min-vh-100">
    <h1>Welcome to Page 2</h1>
    <p>This is the content of Page 2.</p>
    <a href="/" class="btn btn-outline-dark">Go back to Page 1</a>
  </div>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
  <script src="js/transitions.js"></script>
  <script src="script.js"></script>
</body>
</html>
`
