const { Observable } = require('rxjs');
const axios = require('axios');

Observable.ajax = {
  get(url) {
    return Observable.fromPromise(
      axios.get(`http://localhost:3000${url}`)
        .then(({ data }) => data)
    );
  },
};

function fetchOrders() {
  return Observable.ajax.get('/orders');
}

fetchOrders()
  .mergeAll()
  .subscribe(x => console.log(x));
