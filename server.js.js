const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000; // Important: Azure passes the port automatically

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>3MTT Azure Cloud Success</title>
        <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f7f6; color: #333; text-align: center; padding: 50px; }
            .card { background: white; max-width: 500px; margin: 0 auto; padding: 30px; border-radius: 10px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); border-top: 5px solid #0078d4; }
            h1 { color: #0078d4; margin-bottom: 10px; }
            p { font-size: 1.1em; line-height: 1.6; color: #666; }
            .badge { background-color: #4caf50; color: white; padding: 5px 15px; border-radius: 20px; font-weight: bold; display: inline-block; margin-top: 15px; }
        </style>
    </head>
    <body>
        <div class="card">
            <h1>Platform as a Service (PaaS)</h1>
            <p><strong>Success!</strong> My Node.js web application is officially running live on a fully managed Azure App Service environment.</p>
            <p>Infrastructure overhead managed by Azure; code powered by me.</p>
            <span class="badge">3MTT Assignment Live</span>
        </div>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server is running smoothly on port ${PORT}`);
});