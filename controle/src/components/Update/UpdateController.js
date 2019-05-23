export default {
  data() {
    return {
      card_visible: false,
      situacao: '',
      responsavel: '',
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
  }
}
