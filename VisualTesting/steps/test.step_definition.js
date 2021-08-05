const defineSupportCode = require('cucumber').defineSupportCode;
const assert = require('assert');
const backstop = require('backstopjs');
var testConfig = require('../src/main/config_backstop_module');
const openFile = require('../src/main/util/OpenFile.js')
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv


defineSupportCode(function({ Given, Then, When, setDefaultTimeout }) {
    setDefaultTimeout(500000);
    let application = "";
    let interaction = "";
    let tag = "";
    let reference = false;
    let devices = [];

    Given('I have my app {string}', function(input) {
        application = input;
    });

    Given('I have {string} class', function(input) {
        tag = input
    });

    Given('I run reference', function(input) {
        reference = true
    });

    Given('I have some devices', function(data) {
        var devicesData = data.raw();
        console.log(devicesData.length);
        var device = []
        for (i = 1; i < devicesData.length; i++) {
            device = devicesData[i]
            devices.push({
                "label": device[0],
                "width": device[1],
                "height": device[2]
            })
        }
    });

    When('I {string}', function(interactionI) {
        interaction = interactionI
    });

    Then('I check {string}', function(other, callback) {
        backstop(argv.backstop, testConfig.testConfig(application, tag, devices, interaction, 
        JSON.parse(openFile.read('environment/'+argv.envTest+'.json'))
        )).then(
            () => {
                console.log(`No changes found.`);
                callback();
            },
            () => {
                console.log(`Changes found.`);
            }
        );
    });
});