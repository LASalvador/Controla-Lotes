export default {
  data() {
    return {
      card_visible: false,
      id: '',
      lote: '',
      situacao: '',
      responsavel: '',
      maquina: '',
      trajetos: ['Produção','Lavagem','Jateamento','Inspecao','Sala limpa','Embalagem'],
      local: '',
      situacoes: ['Em espera','Em processo','Terminada'],
      rules: {
					required: value => !!value || 'Preenche essa porra ai',
					email: value => {
							const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
							return pattern.test(value) || 'E-mail inválido.'
					}

			}
    }
  },
  methods: {
    selecionarLote: function() {
      this.$http.get('http://localhost:8081/search/'+this.id).then(function(data) {
      this.lote = data.body;
      this.card_visible = true;
    })
    },
    atualizarLote: function() {
      this.$http.put('http://localhost:8081/lot/update/'+this.id, {
        cod_lote: this.id,
        responsavel: this.responsavel,
        status: this.situacao,
        etapa: this.etapa,
        maquina: this.maquina
      }).then(function(data){
        alert('Atualizado com sucesso');
      }).catch(err => alert(err));
    }
  }
}
