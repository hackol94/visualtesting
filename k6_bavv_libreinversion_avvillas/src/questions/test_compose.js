import { check } from 'k6';
import * as TEST_CASE from '../resources/unitaries_test_performance/test_case.js'
import * as EXECUTOR from '../options/execution_models.js'
import * as HEADERS from '../resources/unitaries_test_performance/models/headers.js'

export let validation_test = ({ headers = HEADERS, TEST }) => {
    let checked = null;
    let res = null;
    console.log("TEST " + TEST);
    //headers.headers['authorization'] = EXECUTOR.get_token_auth();
    headers.headers['authorization'] = "";
    if (__ENV.P_UNIT) {
        res = EXECUTOR.executor({ headers: headers });
        console.log("CONSOLE LOG " + JSON.stringify(res));
    }


    switch (TEST) {
        case "wss_digital_signature":
        case "wss_validacion_promissory":
        case "wss_viability":
            res = EXECUTOR.executor({ headers: headers });
            console.log("CONSOLE LOG " + JSON.stringify(res));
            try {
                checked = check(res, {
                    'Validation correct': (r) => JSON.parse(r).httpCode === TEST_CASE[__ENV.TEST].httpCode
                });
            } catch (error) {
                checked = false;
            }
            break;
        case "wss_filing":
            try {
                checked = check(res, {
                    'Validation correct': (r) => JSON.parse(r).filing.httpCode === TEST_CASE[__ENV.TEST].httpCode
                });
            } catch (error) {
                checked = false;
            }
            break;
        case "wss_insurance_documents":
            try {
                checked = check(res, {
                    'Validation correct': (r) => JSON.parse(r).documents.httpCode === TEST_CASE[__ENV.TEST].httpCode
                });
            } catch (error) {
                checked = false;
            }
            break;
        case "generation_promissory":
            try {
                checked = check(res, {
                    'Validation correct': (r) => JSON.parse(r.body).statusCode === TEST_CASE[__ENV.TEST].httpCode
                });
            } catch (error) {
                checked = false;
            }
            break;
        default:
            try {
                checked = check(res, {
                    'Validation correct': (r) => JSON.parse(r.body).httpCode === TEST_CASE[__ENV.TEST].httpCode
                });
            } catch (error) {
                checked = false;
            }
            break;
    }
    return checked;
}