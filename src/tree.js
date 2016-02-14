
import Baobab, { monkey } from 'baobab';

const currentCity = monkey({
  cursors: {
    cities: ['.', 'list'],
    id: ['.', 'current']
  },
  get: function(data) {
    if (data.id > -1) {
      return data.cities.filter((city) => city.city.id == data.id);
    }
  }
});

export default new Baobab({
  cities: {
    current_id: -1,
    // current: currentCity,
    list: []
  }
});
