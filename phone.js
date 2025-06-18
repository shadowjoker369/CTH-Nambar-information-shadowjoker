// api/phone.js
import fetch from 'node-fetch';

export default async function handler(req, res) {
  const { number } = req.query;
  const apiKey = process.env.API_KEY;

  if (!number) {
    return res.status(400).json({ error: "Phone number is required" });
  }

  try {
    const response = await fetch(`https://api.apilayer.com/number_verification/validate?number=${number}`, {
      headers: { "ym29bSVL4NH58ZSWPZQYo739Pr3fGgFz": apiKey }
    });

    const data = await response.json();
    res.status(200).json(data);

  } catch (err) {
    res.status(500).json({ error: "Failed to fetch data." });
  }
}