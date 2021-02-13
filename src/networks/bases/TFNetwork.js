import * as tf from '@tensorflow/tfjs';

export const tfNetwork = (model = null) => {
    let model = model;

    const layerTypeMap = {
        'dense': tf.layers.dense,
        // Add conv and lstm with custom layers below
    }

    /**
     * config: {
     *      {type: 'dense', inputShape: [10], nodes: 5, activation: 'relu'}, // Input layer
     *      {type: 'dense', nodes: 10, activation: 'relu'}, // Hidden layer
     *      {type: 'dense', nodes: 4, activation: 'softmax'} // Output layer
     * }
     * 
     * @param {Object} config 
     * @param {Object} layerTypes A map of layers types; Ex: {'dense': tf.layers.dense}
     * @returns {tf.Sequential} The tf.Sequential model generated from the config settings
     */
    const fromConfig = (config, layerTypes = layerTypeMap) => {
        const modelFromConfig = tf.sequential();
    
        config.forEach((layer) => {
            if(!layerIsImplemented(layer.type, layerTypes)) throw "Cannot create model with an unimplemented layer type.";
    
            let layer = layerFromType(type, layerTypes);
    
            modelFromConfig.add(layer(layerParamsFromConfig(layer)))
        });
    
        model = modelFromConfig;
    }

    /**
     * Converts between normal config format and tfjs's config format.
     * @param {Object} layerConfig 
     */
    const layerParamsFromConfig = (layerConfig) => {
        return {inputShape: isInputLayer(layerConfig) ? layerConfig.inputShape : undefined,
                units: layerConfig.nodes,
                activation: layerConfig.activation};
    }

    const layerFromType = (type, layerTypes) => layerTypes[type];

    const isInputLayer = (layerConfig) => layerConfig.hasOwnProperty("inputShape");

    /**
     * Returns if the chosen type has been implemented.
     * @param {String} type 
     * @returns {Boolean}
     */
    const layerIsImplemented = (type, layerTypes) => {
        if(layerTypes.hasOwnProperty(type)) return true;
        else return false;
    }

    return {fromConfig};
}


