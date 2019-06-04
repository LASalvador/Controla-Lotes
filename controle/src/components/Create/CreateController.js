export default {
    data: () => ({
        quantidade: 0,
    }),

    methods: {
        increment() {
            this.foo = parseInt(this.foo, 10) + 1
        },
        decrement() {
            this.foo = parseInt(this.foo, 10) - 1
        }
    }
}
