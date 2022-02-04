const App = new Vue(
  {
    el: '#app',
    data: {
      cars: []
    },
    created() {
      axios.get('http://localhost/php-snacks-b1/server/controller-api.php').then((result) => {
        console.log(result);;
        this.cars = result.data;
      }).catch((error) => { console.log(error); });
    }
  }
);