export class VanillaNetwork {
    constructor(config) {
        /* 
        config: [
            {nodes: 3}, // Input layer
            {nodes: 10, activation: activation.relu} // Hidden layer
            {nodes: 4, activation: activation.softmax} // Output layer
        ]
        */

        this.config = config;
        this.layers = [];

        // Create all layers in the network.
        this.config.forEach((layer, index) => {
            this.layers.push(new Layer(layer.nodes, layer.activation, index == this.config.length - 1));
        });

        // Connect all of the layers together.
        for(let layer = 0; layer < this.layers.length - 1; layer++) {
            this.layers[layer].connect(this.layers[layer + 1]);
        }
    }

    setInputs(inputs) {
        if(this.layers.length < 1) throw "Error: Cannot feed inputs to empty model.";
        if(this.layers[0].getValues().length != inputs.length) throw "Error: The number of inputs does not match the size of the input layer.";

        this.layers[0].setValues(inputs);

        return this;
    }

    feedForward() {
        for(let layer = 0; layer < this.layers.length - 1; layer++) {
            this.layers[layer].feedForward(this.layers[layer + 1]);
        }

        return this;
    }

    outputLayer() {
        const outputLayer = this.layers[this.layers.length - 1];

        if(outputLayer.size() < 1) throw "Error: The output layer is empty.";

        return outputLayer;
    }

    inputLayer() {
        const inputLayer = this.layers[0];

        if(inputLayer.size() < 1) throw "Error: The input layer is empty.";

        return inputLayer;
    }

    rawOutput() {
        return this.outputLayer().getValues();
    }

    maxIndexOutput() {
        const outputs = this.outputLayer().getValues();

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

    getBias() {
        return this.bias;
    }

    getNodes() {
        return [...this.nodes];
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

    getValues() {
        // Return the values of all the nodes in this layer as a list.
        return this.nodes.map((node) => node.getValue());
    }

    setValues(values) {
        if(values.length != this.nodes.length) throw "Error: The number of values and the number of nodes do not match."

        this.nodes.forEach((node, index) => {
            node.setValue(values[index]);
        });
    }

    setAllNodesToValue(value) {
        this.nodes.forEach((node) => node.setValue(value));

        return this;
    }

    feedForward(layer) {
        if(!this.hasBias()) throw "Error: Cannot feed forward from the output layer.";

        layer.setAllNodesToValue(0);

        for(let node of this.nodes) {
            layer.nodes.forEach((foreignNode, index) => {
                foreignNode.setValue(foreignNode.getValue() + node.getValue() * node.getWeights()[index]);
            });
        }

        layer.nodes.forEach((foreignNode, index) => {
            foreignNode.value += this.bias.getWeights()[index];
        });

        layer.setValues(layer.activation(layer.getValues()));
    }

    size() {
        return this.nodes.length;
    }
}

class Node {
    constructor() {
        this.value = 0;
        this.weights = [];
    }

    setValue(value) {
        this.value = value;
    }

    getValue() {
        return this.value;
    }

    getWeights() {
        return [...this.weights];
    }

    setWeights(weights) {
        if(weights.length != this.weights.length) throw "Error: The number of new weights and current weights do not match."

        this.weights = [...weights];

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