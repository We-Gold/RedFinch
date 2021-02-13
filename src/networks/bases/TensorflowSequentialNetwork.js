import * as tf from '@tensorflow/tfjs';

export class TensorflowSequentialNetwork {
    /**
     * This network has a sequential model.
     * This class is more of a standard interface for the sequential model.
     * @param {tf.Sequential} sequentialModel 
     */
    constructor(sequentialModel) {
        if(sequentialModel == null || sequentialModel == undefined || !sequentialModel.hasOwnProperty('summary')) {
            throw "Error: Provided tensorflow sequential model is invalid.";
        }

        this.model = sequentialModel;

        this.output = null;
    }

    tensorflowModel() {
        return this.model;
    }
    
    layers() {
        return this.model.layers;
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

    async downloadModel(name) {
        this.checkIfNameIsValid();

        await model.save(`downloads://${name}`);
    }

    async saveModelToLocalStorage(name) {
        this.checkIfNameIsValid();

        await model.save(`localstorage://${name}`);
    }

    checkIfNameIsValid(name) {
        if(name == "" || name == null || name == undefined) throw "Error: model name is invalid";
    }
}


