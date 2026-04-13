export default function handler(req, res) {
  const { uid } = req.query;

  res.status(200).send(`
    <html>
      <body>
        <h1>Hello ${uid}</h1>
      </body>
    </html>
  `);
}