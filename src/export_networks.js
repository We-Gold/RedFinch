import { EvolvingNetwork } from './networks/wrappers/EvolvingNetwork.js';
import { SequentialNetwork } from './networks/bases/SequentialNetwork.js'

/**
 * Returns an instance of SequentialNetwork.
 * @param {tf.Sequential} model 
 * @param {tf} tfjs A reference to the tf global from tensorflow.js. This argument is required.
 */
export function sequentialNetwork(model, tfjs) {
    return new SequentialNetwork(model, tfjs);
}

/**
 * Returns an instance of EvolvingNetwork.
 * @param {tf.Sequential} model 
 * @param {tf} tfjs A reference to the tf global from tensorflow.js. This argument is required.
 */
export function evolvingNetwork(model, tfjs) {
    return new EvolvingNetwork(model, tfjs);
}

export { SequentialNetwork, EvolvingNetwork };