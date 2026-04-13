<<<<<<< HEAD
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
=======
import admin from "firebase-admin";

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY
  ? process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n')
  : undefined,
    }),
  });
}

export default async function handler(req, res) {
  try {
    const { uid } = req.query;

    res.status(200).json({
      success: true,
      uid,
      message: "Hello " + uid,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
>>>>>>> b3fbb05fdf27ab8604b1977b849bf178431d68d9
}