
import { get } from '../requester';


function makeRequest(req, res, search) {
  get('/forecast', Object.assign(search, { units: 'metric' }))
  .then(({ data }) => {

    // api return error
    if (data.cod >= 400) {
      res.status(data.cod).json({ error: data });
    }
    else {
      res.status(200).json({
        success: true,
        content: data
      });
    }
  })
  .catch((error) => {
    res.status(error.data.cod || error.status).json({ error: error.data }).end();
  });
}


export default function weather(req, res) {
  const location = req.query.location;

  if (!location) {
    res.status(400).json({ error: 'No `location` provided!' });
    return;
  }

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

  makeRequest(req, res, search);
}

