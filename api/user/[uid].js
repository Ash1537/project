import { db } from "../../lib/firebase";

export default async function handler(req, res) {
  const { uid } = req.query;

  try {
    const doc = await db.collection("users").doc(uid).get();

    if (!doc.exists) {
      return res.status(404).send("User not found");
    }

    const user = doc.data();

    return res.status(200).send(`
      <html>
        <head>
          <meta property="og:title" content="${user.name}" />
          <meta property="og:description" content="${user.bio}" />
          <meta property="og:image" content="${user.image}" />
          <meta property="og:url" content="https://${req.headers.host}/user/${uid}" />
        </head>
        <body>
          Profile for ${user.name}
        </body>
      </html>
    `);
  } catch (err) {
    console.error(err);
    return res.status(500).send("Server error");
  }
}