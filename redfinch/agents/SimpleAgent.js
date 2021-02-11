class SimpleAgent {
    constructor(genes) {
        this.genes = genes;
    }

    get genes() {
        return this.getFlattened();
    }

    setGenes(genes) {
        if(genes == null || genes == undefined) throw "Invalid genes";

        this.genes = genes;

        return this;
    }
}

export { SimpleAgent };