
export default async function getMemory() {
    return performance.measureUserAgentSpecificMemory()
        .then(obj => obj.bytes);
}

