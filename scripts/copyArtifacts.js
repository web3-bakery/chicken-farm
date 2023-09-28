const fs = require('fs');
const path = require('path');

const artifactsDir = path.join(__dirname, '..', 'artifacts', 'contracts');
const appContractsDir = path.join(__dirname, '..', 'app', 'src', 'contracts');

function copyContractArtifacts(contractMappings) {
    // Ensure the app contracts directory exists
    if (!fs.existsSync(appContractsDir)) {
        fs.mkdirSync(appContractsDir, { recursive: true });
    }

    for (let contractName in contractMappings) {
        const artifactPath = path.join(artifactsDir, `${contractName}.sol`, `${contractName}.json`);

        if (fs.existsSync(artifactPath)) {
            const artifact = require(artifactPath);
            const dataToSave = {
                abi: artifact.abi,
                address: contractMappings[contractName]
            };
            fs.writeFileSync(path.join(appContractsDir, `${contractName}.json`), JSON.stringify(dataToSave, null, 2));
        } else {
            console.error(`Artifact for ${contractName} not found!`);
        }
    }

    console.log("Contract ABIs and addresses copied to app!");
}

module.exports = { copyContractArtifacts };
