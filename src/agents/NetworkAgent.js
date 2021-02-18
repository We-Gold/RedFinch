export class NetworkAgent {
    /**
     * Constructs the agent with a tensorflow sequential network.
     * The SequentialNetwork is an wrapper for tf.Sequential,
     * in order to maintain consistency in the library.
     * @param {SequentialNetwork} network 
     */
    constructor(network) {
        this.network = network;
    }

    /**
     * @returns {SequentialNetwork}
     */
    getNetwork() {
        return this.network;
    }

    /**
     * Get a prediction from the network based on some inputs.
     * @param  {tf.Tensor} inputs The inputs to the network
     * @return {any}      The output of the network.
     */
    predict(inputs, returnMaxIndex=false) {
        this.feedForward(inputs);

        return returnMaxIndex ? this.maxIndexOutput() : this.rawOutput();
    }

    /**
     * Feed the inputs through the network.
     * @param  {tf.Tensor} inputs The inputs to the network
     * @return {NetworkAgent}      Returns itself for chaining.
     */
    feedForward(inputs) {
        if(inputs == null) throw "Error: Inputs are null";

        this.network.setInputs(inputs).feedForward();

        return this;
    }

    /**
     * Returns the index of the network's output.
     * @returns {Integer}
     */
    maxIndexOutput() {
        return this.network.maxIndexOutput();
    }

    /**
     * Returns the network's output as an array.
     * @returns {Array} 
     */
    rawOutput() {
        return this.network.rawOutput();
    }

    /**
     * Returns the network's output as a tensor.
     * @returns {tf.Tensor}
     */
    tensorOutput() {
        return this.network.tensorOutput();
    }
}