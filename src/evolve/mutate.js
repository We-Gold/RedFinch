/**
 * Generates a mutated form of the given agent's flattened form.
 * @param {any} agent 
 * @param {Number} mutationRate 
 * @param {Function} randomGeneFunction Returns a random gene value when called. Defaults to return a value from -1 to 1.
 */
export function random(agent, mutationRate=0.05, randomGeneFunction = getRandomGeneValue) {
    if(agent == null || agent == undefined) throw "Invalid agent";

    const flattenedNetwork = agent.getFlattened();

    return flattenedNetwork.map((gene) => {
        if(Math.random() <= mutationRate) return randomGeneFunction();
        else return gene;
    });
}

function getRandomGeneValue() {
    // Return a number from -1 to 1
    return (Math.random() * 2) - 1;
}