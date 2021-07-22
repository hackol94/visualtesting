const backstop = require('backstopjs');

module.exports.testConfig = function testConfig(application, tag, devices, interaction) {

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
            scenarios: [{
                label: "loginjhjhs",
                cookiePath: "backstop_data/engine_scripts/config/cookies/cookies.json",
                url: "https://d1n8gq8jhttzm1.cloudfront.net/",
                onReadyScript: "",
                referenceUrl: "",
                readyEvent: "",
                readySelector: "",
                delay: 1000,
                hideSelectors: [],
                removeSelector: "",
                hoverSelector: "div input[type='number']",
                clickSelector: "",
                postInteractionWait: 0,
                selectors: [],
                selectorExpansion: true,
                expect: 0,
                misMatchThreshold: 0.01,
                requireSameDimensions: true
            }],
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