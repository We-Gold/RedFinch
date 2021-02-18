export class TFNetworkAgent {
    /**
     * Constructs the agent with a tf sequential network.
     * The TensorflowSequentialNetwork is an api for tf.Sequential,
     * in order to maintain consistency in the library.
     * @param {TensorflowSequentialNetwork} network 
     */
    constructor(network) {
        this.network = network;
    }

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

    maxIndexOutput() {
        return this.network.maxIndexOutput();
    }

    rawOutput() {
        return this.network.rawOutput();
    }

    tensorOutput() {
        return this.network.tensorOutput();
    }
}