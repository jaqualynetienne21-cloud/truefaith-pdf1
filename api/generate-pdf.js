export default async function handler(req, res) {
  const { style = "dopamine" } = req.body || {};
  return res.status(200).json({
    fileUrl: "https://truefaithstrategies.com/files/sample-packet.pdf",
    style
  });
}
