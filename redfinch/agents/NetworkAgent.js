class NetworkAgent {
    constructor(network) {
        this.network = network;
    }

    get network() {
        return this.network;
    }

    /**
     * Get a prediction from the network based on some inputs.
     * @param  {Array} inputs The inputs to the network
     * @return {any}      The output of the network.
     */
    getPrediction(inputs) {
        return this.feedForward(inputs).getNetworkOutput();
    }

    /**
     * Feed the inputs through the network.
     * @param  {Array} inputs The inputs to the network
     * @return {NetworkAgent}      Returns itself for chaining.
     */
    feedForward(inputs) {
        if(inputs == null) throw "Inputs are null";

        this.network.setInputLayer(inputs).feedForward();

        return this;
    }

    /**
     * Get the output of the network.
     * @param  {Array} outputOptions A list of the various things the network can output. 
     * @return {NetworkAgent}      Returns itself for chaining.
     */
    getNetworkOutput(outputOptions) {
        const outputIndex = this.getOutputIndex();

        if(outputOptions.length <= outputIndex) throw "The output is out of the bounds of the given options.";

        return outputOptions[outputIndex];
    }

    getOutputIndex() {
        return this.network.getOutputIndex();
    }
}

export { NetworkAgent };