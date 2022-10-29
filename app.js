Vue.createApp({
    data() {
        return {
            x: 0
        }
    },
    watch: {
        x(value) {
            if(value > 0) {
                setTimeout(() => {
                    this.x = 0;
                }, 5000);
            }
        }
    },
    computed: {
        result() {
            if (this.x < 37) {
                return "Not there yet";
            } else if (this.x > 37) {
                return "Too much!";
            } else {
                return 37;
            }
        }
    },
    methods: {
        add(n) {
            this.x += n;
        }
    }
}).mount('#assignment');