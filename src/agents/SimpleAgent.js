export class SimpleAgent {
    constructor(genes) {
        this.genes = genes;
    }

    getGenes() {
        return [...this.genes];
    }

    setGenes(genes) {
        if(genes == null || genes == undefined) throw "Invalid genes";

        this.genes = [...genes];

        return this;
    }
}