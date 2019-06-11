export default {
  data: () => ({
    card_visible: false,
    lote: [],
    id: 0,
  }),
 methods: {
 	pesquisarLote: function(){
 		this.$http.get('http://localhost:8081/search/'+this.id).then(function(data) {
 			this.lote = data.body;
 			this.card_visible = true;
 		})
 	}
 }
}
