export default function handler(req, res) {
  if(req.method !== 'GET' && req.method !== 'POST'){
    res.status(405).end() // Method Not Allowed
  }
  if(req.method === 'POST') {
    res.status(200).json({ text: req.body.text });
  } 

  res.status(200).json({ text: 'Hello' });
}