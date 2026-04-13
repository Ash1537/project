export default function handler(req, res) {
  const { uid } = req.query;

  const name = uid || "User";

  return res.status(200).send(`
    <html>
      <head>
        <meta property="og:title" content="KatCard Profile: ${uid}" />
        <meta property="og:description" content="View ${uid}'s professional profile on KatCard." />
        <meta property="og:image" content="${user.profileImage}" />
        <meta property="og:url" content="https://yourdomain.com/api/og?uid=${uid}" />
      </head>
      <body>
        OG ready for ${name}
      </body>
    </html>
  `);
}