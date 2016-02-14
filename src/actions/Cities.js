
import { get } from 'axios'
import Tree from 'tree';

export function locate(query) {
  return get(`/weather?location=${query}`)
  .then(({ data }) => {
    const city = data.content.city.id;

    Tree.select('cities', 'list').push(data.content);
  });
}
