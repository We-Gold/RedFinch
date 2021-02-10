class Activation {
    relu(...values) {
        return values.map((x) => {
            if(x > 0) return x;
            else return 0;
        });
    }

    tanh(...values) {
        return values.map((x) => {
            return Math.tanh(x);
        });
    }

    sigmoid(...values) {
        return values.map((x) => {
            return (1 / (1 + Math.exp(-x)));
        });
    }

    leaky_relu(...values) {
        return values.map((x) => {
            if (x > 0) return x;
            else return (x * 0.01);
        });
    }

    softmax(arr) {
        const sum = arr.reduce((prev, curr) => prev + Math.exp(curr), 0);

        return arr.map(x => (Math.exp(x) / sum));
    }
}

export { Activation };