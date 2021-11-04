const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv
var shell = require('shelljs');
const proces = require('process');
const tags = argv.tags.split(",");
tags.forEach((element) => {
    //shell.exec("k6 run ./src/runnerPerformanceTest.js -e TEST=" + element + " -e ENVTEST=" + argv.envTest + " -e TYPE_TEST=" + argv.typeTest + " -e P_UNIT=" + argv.pUnit);
    shell.exec("k6 run  --out influxdb=http://localhost:8086/myk6db  --logformat=raw --console-output=results/" + element + "_" + argv.typeTest + "_$(date +%Y%m%d-%H%M%S).log  ./src/runnerPerformanceTest.js -e TEST=" + element + " -e ENVTEST=" + argv.envTest + " -e TYPE_TEST=" + argv.typeTest + " -e P_UNIT=" + argv.pUnit);
});
//  npm install  
//  node index.js --tags="basic_data,other" --typeTest="stress_test" --envTest="DEV" --pUnit=true