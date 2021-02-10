class VanillaNetwork {
    constructor(config) {
        /* 
        config: {
            {nodes: 3}, // Input layer
            {nodes: 10, activation: Activation.relu} // Hidden layer
            {nodes: 4, activation: Activation.softmax} // Output layer
        }
        */

        this.config = config;
        this.layers = [];

        // Create all layers in the network.
        this.config.forEach((layer, index) => {
            this.layers.push(new Layer(layer.nodes, layer.activation, index == this.config.length - 1));
        });

        // Connect all of the layers together.
        for(let layer = 0; layer < this.layers.length - 1; layer++) {
            this.layers[i].connect(this.layers[i + 1]);
        }
    }

    setInputs(inputs) {
        if(this.layers.length < 1) throw "Cannot feed inputs to empty model.";
        if(this.layers[0].values.length != inputs.length) throw "The number of inputs does not match the size of the input layer.";

        this.layers[0].values = inputs;

        return this;
    }

    feedForward() {
        for(let layer = 0; layer < this.layers.length - 1; layer++) {
            this.layers[i].feedForward(this.layers[i + 1]);
        }

        return this;
    }

    getOutputs() {
        const outputs = this.layers[this.layers.length - 1];

        if(outputs.length < 1) throw "Cannot get outputs from empty output layer.";

        return outputs;
    }

    getGreatestOutput() {
        const outputs = this.getOutputs();

        let max = {value: outputs[0], index: 0};

        outputs.forEach((output, index) => {
            if(output > max) max = {value: output, index: index};
        });

        return max.index;
    }
}

class Layer {
    constructor(nodes, activation, isOutputLayer = false) {
        this.nodes = [];
        this.activation = activation;
        this.isOutputLayer = isOutputLayer;
        
        for(let i = 0; i < nodes; i++) {
            this.nodes.push(new Node());
        }

        // Create a bias unless this is the output layer;
        this.bias = !isOutputLayer ? new Node() : undefined;
    }

    connect(layer) {
        const nodesInNextLayer = layer.nodes.length;

        this.nodes.forEach(node => node.initializeWeightsRandomly(nodesInNextLayer));

        if(this.hasBias()) this.bias.initializeWeightsRandomly(nodesInNextLayer);

        return this;
    }

    hasBias() {
        return !this.isOutputLayer;
    }

    get values() {
        // Return the values of all the nodes in this layer as a list.
        return this.nodes.map((node) => node.value);
    }

    set values(values) {
        if(values.length != this.nodes.length) throw "The number of values and the number of nodes do not match."

        this.nodes.forEach((node, index) => {
            node.value = values[index];
        });
    }

    setAllNodesToValue(value) {
        this.nodes.forEach((node) => node.value = value);

        return this;
    }

    feedForward(layer) {
        if(!this.hasBias()) throw "Cannot feed forward from the output layer.";

        layer.setAllNodeValues(0);

        for(let node of this.nodes) {
            layer.nodes.forEach((foreignNode, index) => {
                foreignNode.value += node.value * node.weights[index];
            });
        }

        layer.nodes.forEach((foreignNode, index) => {
            foreignNode.value += this.bias.weights[index];
        });

        layer.values = layer.activation(layer.values);
    }
}

class Node {
    constructor() {
        this.value = 0;
        this.weights = [];
    }

    get weights() {
        return [...this.weights];
    }

    set weights(weights) {
        if(weights.length != this.weights.length) throw "The number of new weights and current weights do not match."

        this.weigths = [...weights];

        return this;
    }
    
    initializeWeightsRandomly(numberOfWeights) {
        this.weights = [];

        for(let i = 0; i < numberOfWeights; i++) {
            // Generate weight values between -1 and 1
            this.weights.push((Math.random() * 2) - 1);
        }

        return this;
    }
}

export { VanillaNetwork };