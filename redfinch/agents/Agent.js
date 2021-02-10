class Agent {
    constructor(network) {
        this.network = network;
    }

    get network() {
        return this.network;
    }

    getPrediction(inputs) {
        return this.feedForward(inputs).getNetworkOutput();
    }

    feedForward(inputs) {
        if(inputs == null) throw "Inputs are null";

        this.network.setInputLayer(inputs).feedForward();

        return this;
    }

    getNetworkOutput() {
        return this.network.getGreatestOutput();
    }
}

export { Agent };