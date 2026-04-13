export default function handler(req, res) {
  const { uid } = req.query;

  return res.status(200).send(`
    <html>
      <head>
        <meta property="og:title" content="User ${uid}" />
        <meta property="og:description" content="Profile preview" />
      </head>
      <body>
        OG working for ${uid}
      </body>
    </html>
  `);
}