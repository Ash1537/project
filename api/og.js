export default async function handler(req, res) {
  const { uid } = req.query;

  const profile = {
    name: "KatCard User",
    headline: "Digital Business Card",
    image: "https://via.placeholder.com/1200x630.png"
  };

  res.setHeader("Content-Type", "text/html");

  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta property="og:title" content="${profile.name}" />
        <meta property="og:description" content="${profile.headline}" />
        <meta property="og:image" content="${profile.image}" />
      </head>
      <body>
        <script>
          window.location.href = "/#/public/${uid}";
        </script>
      </body>
    </html>
  `);
}