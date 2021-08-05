const backstop = require('backstopjs');

module.exports.testConfig = function testConfig(application, tag, devices, interaction, scenarios) {
    console.log("Sceneriooooooo ----> ", scenarios);
    return {
        i: true,
        config: {
            id: "backstop_default",
            viewports: [

                {
                    label: "desktop",
                    width: 1366,
                    height: 768
                }
            ],
            onBeforeScript: "config/onBefore.js",
            onReadyScript: "scenarios/shared/login.js",
            scenarios: scenarios,
            paths: {
                bitmaps_reference: "backstop_data/bitmaps_reference",
                bitmaps_test: "build/bitmaps_test",
                engine_scripts: "backstop_data/engine_scripts",
                html_report: "build/html_report",
                ci_report: "build/ci_report"
            },
            report: ["browser"],
            engine: "puppeteer",
            engineOptions: {
                args: ["--no - sandbox "],
                headless: true,
                slowMo: 0
            },
            asyncCaptureLimit: 1,
            asyncCompareLimit: 1,
            debug: false,
            debugWindow: false
        }
    };


}