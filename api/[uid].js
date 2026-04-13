export default function handler(req, res) {
  const { uid } = req.query;

  const name = uid || "User";

  return res.status(200).send(`
    <html>
      <head>
        <meta property="og:title" content="${name}" />
        <meta property="og:description" content="KatCard Profile" />
        <meta property="og:image" content="https://via.placeholder.com/1200x630.png?text=${name}" />
        <meta property="og:url" content="https://${req.headers.host}/user/${uid}" />
      </head>
      <body>
        Profile page for ${name}
      </body>
    </html>
  `);
}