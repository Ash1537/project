export default function handler(req, res) {
  const { uid } = req.query;

  const name = uid || "User";

  return res.status(200).send(`
    <html>
      <head>
        <meta property="og:title" content="${name}" />
        <meta property="og:description" content="KatCard Profile" />
        <meta property="og:image" content="https://yourdomain.com/preview.png" />
        <meta property="og:url" content="https://yourdomain.com/api/og?uid=${uid}" />
      </head>
      <body>
        OG ready for ${name}
      </body>
    </html>
  `);
}