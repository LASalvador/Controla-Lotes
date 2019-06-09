export default {
  data: () => ({
    card_visible: false,
  }),
 methods() {
 	pesquisarLote: function(){
 		this.$http('http://localhost:8081/search/:lote')
 	}
 }
}
