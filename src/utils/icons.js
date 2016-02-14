
import weatherIcons from 'icons.json';

// http://weathericons.io
// https://gist.github.com/tbranyen/62d974681dea8ee0caa1

/**
 * Get icon class for weather
 * @param  {Object} options.weather Item in forecast
 * @return {String}                 Class name with prefix
 */
export function getIcon({ weather }) {
  const prefix = 'wi wi-';
  const code = weather[0].id;
  let icon = weatherIcons[code].icon;

  // If we are not in the ranges mentioned above, add a day/night prefix.
  if (!(code > 699 && code < 800) && !(code > 899 && code < 1000)) {
    icon = 'day-' + icon;
  }

  return prefix + icon;
}