export class SimpleAgent {
    /**
     * A simple agent that has an array to store genes.
     * @param {Array} genes 
     */
    constructor(genes) {
        this.genes = genes;
    }

    /**
     * @returns {Array} This agent's genes
     */
    getGenes() {
        return [...this.genes];
    }

    /**
     * Updates this agent's genes.
     * @param {Array} genes 
     */
    setGenes(genes) {
        if(genes == null || genes == undefined) throw "Invalid genes";

        this.genes = [...genes];

        return this;
    }
}