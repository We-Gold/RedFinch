export function relu(values) {
    return values.map((x) => {
        if(x > 0) return x;
        else return 0;
    });
}

export function tanh(values) {
    return values.map((x) => {
        return Math.tanh(x);
    });
}

export function sigmoid(values) {
    return values.map((x) => {
        return (1 / (1 + Math.exp(-x)));
    });
}

export function leaky_relu(values) {
    return values.map((x) => {
        if (x > 0) return x;
        else return (x * 0.01);
    });
}

export function softmax(values) {
    const sum = values.reduce((prev, curr) => prev + Math.exp(curr), 0);

    return values.map(x => (Math.exp(x) / sum));
}
