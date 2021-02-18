export class SequentialNetwork {
    /**
     * This network has a sequential model.
     * This class is more of a standard interface for the sequential model.
     * @param {tf.Sequential} model A defined tensorflow sequential model. 
     * @param {tf} tfjs A reference to the tf global from tensorflow.js. This argument is required.
     */
    constructor(model, tfjs) {
        if(model == null || model == undefined) {
            throw "Error: Provided tensorflow sequential model is invalid.";
        }

        if(tfjs == null || tfjs == undefined) {
            throw "Error: Tensorflow.js global is invalid. You must pass in `tf` from tensorflow.js.";
        }

        this.model = model;

        this.tfjs = tfjs;
        
        this.output = null;
    }

    getModel() {
        return this.model;
    }

    setModel(model) {
        if(model == null || model == undefined) {
            throw "Error: Provided tensorflow sequential model is invalid.";
        }

        this.model = model;

        return this;
    }
    
    layers() {
        return this.model.layers;
    }

    getWeights() {
        return this.model.getWeights();
    }

    predict(inputs) {
        return this.model.predict(inputs);
    }

    feedForward(inputs) {
        this.output = this.predict(inputs);

        return this;
    }

    tensorOutput() {
        this.checkIfOutputIsValid();
        return this.output;
    }

    rawOutput() {
        this.checkIfOutputIsValid();
        return this.output.arraySync();
    }

    maxIndexOutput() {
        const outputs = this.rawOutput();

        let max = {value: outputs[0], index: 0};

        outputs.forEach((output, index) => {
            if(output > max) max = {value: output, index: index};
        });

        return max.index;
    }

    checkIfOutputIsValid() {
        if(this.output == null) throw "Error: Output of model is null. It could be that `feedForward` has not been run.";
    }
}


