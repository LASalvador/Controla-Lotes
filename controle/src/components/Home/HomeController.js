export default {
    data() {
        return {
          drawer: false,
          lotes: []
        }
      },
    created() {
        this.$http.get('http://localhost:8081/home').then(function(data) {
            this.lotes = data.body;
        })
    }

}