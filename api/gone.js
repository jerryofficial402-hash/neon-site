export default function handler(req, res) {
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.setHeader('Cache-Control', 's-maxage=86400, max-age=86400, stale-while-revalidate');
  return res.status(410).send("410 Gone - This page has been permanently removed.");
}
