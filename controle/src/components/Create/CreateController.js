export default {
    data: () => ({
        quantidade: 0,
        checkbox1: 0,
        checkbox2: 0,
        checkbox3: 0,
        checkbox4: 0,
        checkbox5: 0,
        checkbox6: 0,
        checkbox7: 0,
    }),

    methods: {
        increment() {
            this.quantidade = parseInt(this.quantidade, 10) + 1
        },
        decrement() {
            this.quantidade = parseInt(this.quantidade, 10) - 1

        },
        enviar_dados(){
            let trajeto;
            if (this.checkbox1){
                trajeto += 'Produção;';
            }
            if (this.checkbox2){
                trajeto += 'Lavagem;';
            }
            if (this.checkbox3){
                trajeto += 'Jateamento;';
            }
            if (this.checkbox4){
                trajeto += 'Inspeção;';
            }
            if (this.checkbox5){
                trajeto += 'Lavagem 2;';
            }
            if (this.checkbox6){
                trajeto += 'Sala Limpa;';
            }
            if (this.checkbox7){
                trajeto += 'Embalagem;';
            }
        this.$http.post('http://localhost:8081', {
            produto: this.produto,
            quantidade: this.quantidade,
            trajeto: trajeto
        }).then(function(data) {
            console.log(data);
        })},

    }
}
