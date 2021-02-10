class Mutate {
    random(agent, mutationRate=0.05) {
        if(agent == null || agent == undefined) throw "Invalid agent";

        const flattenedNetwork = agent.network.flatten();

        return flattenedNetwork.map((gene) => {
            if(Math.random() <= mutationRate) return this.getRandomGeneValue();
            else return gene;
        });
    }

    getRandomGeneValue() {
        // Return a number from -1 to 1
        return (Math.random() * 2) - 1;
    }
}