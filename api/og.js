import admin from "firebase-admin";

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY
        ? process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n")
        : undefined,
    }),
  });
}

export default async function handler(req, res) {
  try {
    const { uid } = req.query;

    const db = admin.firestore();
    const docRef = db.collection("profiles").doc(uid);
    const snap = await docRef.get();

    let name = "Unknown User";

    if (snap.exists) {
      name = snap.data().name || "User";
    }

    return res.status(200).send(`
      <html>
        <head>
          <meta property="og:title" content="${name}" />
          <meta property="og:description" content="Profile preview" />
        </head>
        <body>
          Profile: ${name}
        </body>
      </html>
    `);
  } catch (err) {
    console.error(err);
    return res.status(500).send("Server error");
  }
}