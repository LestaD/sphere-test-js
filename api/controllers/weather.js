
import { get } from '../requester';


export default function weather(req, res) {
  const location = req.query.location;
  let search = {
    q: location
  };

  // if lat,lon passed
  if (location.match(/\s*(\-?\d+(\.\d+)?),\s*(\-?\d+(\.\d+)?)\s*/)) {
    const coords = location.split(',');
    search = {
      lon: Number(coords[0].trim()),
      lat: Number(coords[1].trim())
    }
  }

  get('/forecast', Object.assign(search, { units: 'metric' }))
  .then(({ data }) => {

    // api return error
    if (data.cod >= 400) {
      return res.status(data.cod).json({ error: data });
    }

    res.status(200).json({
      success: true,
      content: data
    });
  })
  .catch(({ data }) => {
    res.status(data.cod).json({ error: data });
  });
}

