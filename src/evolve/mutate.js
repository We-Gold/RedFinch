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