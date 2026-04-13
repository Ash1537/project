export default function handler(req, res) {
  const { uid } = req.query;

  res.status(200).json({
    success: true,
    uid: uid,
    message: `Hello ${uid}`
  });
}