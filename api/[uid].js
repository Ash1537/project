export default function handler(req, res) {
  const { uid } = req.query;

  res.status(200).send(`
    <html>
      <head>
        <meta property="og:title" content="${uid}" />
        <meta property="og:description" content="Profile preview" />
        <meta property="og:image" content="https://dummyimage.com/1200x630/000/fff&text=${uid}" />
      </head>
      <body>
        Hello ${uid}
      </body>
    </html>
  `);
}