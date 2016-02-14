
import Baobab, { monkey } from 'baobab';


const tree = new Baobab({
  cities: {
    selected: -1,
    list: []
  }
}, { immutable: false });


// try load previous tree state from localStorage
if (localStorage && localStorage.hasOwnProperty('__baobab_data')) {
  try {
    const previousState = JSON.parse(localStorage.getItem('__baobab_data'));

    if (!previousState || typeof previousState !== 'object' || Array.isArray(previousState)) {
      throw new Error();
    }

    tree.set(previousState);
  }
  catch (e) {
    localStorage.removeItem('__baobab_data');
  }
}


// backup tree to localStorage
tree.on('update', ({ data }) => {
  if (localStorage) {
    localStorage.setItem('__baobab_data', JSON.stringify(data.currentData));
  }
});


export default tree;
