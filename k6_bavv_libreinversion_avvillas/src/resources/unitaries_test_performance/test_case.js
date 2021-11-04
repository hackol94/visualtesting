import * as body from './models/body_request_test.js'

module.exports = {
    otp_security: {
        method: "POST",
        url_base: "rest_api_public",
        body: body["otp_security"],
        path: "/otp-security",
        httpCode: 0
    },
    update_credit: {
        method: "POST",
        url_base: "rest_api_capabilities",
        body: body["update_credit"],
        path: "/update-credit",
        httpCode: 200
    },
    wss_viability: {
        method: "WSS",
        url_base: "wss_url_base",
        body: body["wss_viability"],
        path: "",
        httpCode: 0
    },
    wss_filing: {
        method: "WSS",
        url_base: "wss_url_base",
        body: body["wss_filing"],
        path: "",
        httpCode: 200
    },
    wss_digital_signature: {
        method: "WSS",
        url_base: "wss_url_base",
        body: body["wss_digital_signature"],
        path: "",
        httpCode: 200
    },
    wss_insurance_documents: {
        method: "WSS",
        url_base: "wss_url_base",
        body: body["wss_insurance_documents"],
        path: "",
        httpCode: 200
    },
    otp_generations: {
        method: "POST",
        url_base: "rest_api_public",
        body: body["otp_generations"],
        path: "/otp-generation",
        httpCode: 0
    },
    basic_data: {
        method: "POST",
        url_base: "rest_api_public",
        body: body["basic_data"],
        path: "/basic-data",
        httpCode: 200
    },
    resume_credit: {
        method: "POST",
        url_base: "rest_api_public",
        body: body["resume_credit"],
        path: "/resume-credit",
        httpCode: 200
    },
    crm_query_enhanced: {
        method: "GET",
        url_base: "rest_api_capabilities",
        body: body["crm_query_enhanced"],
        path: "/crm-query-enhanced",
        httpCode: 200
    },
    passive_product: {
        method: "POST",
        url_base: "rest_api_capabilities",
        body: body["passive_product"],
        path: "/passive-product",
        httpCode: 200
    },
    insurance_filing: {
        method: "POST",
        url_base: "rest_api_capabilities",
        body: body["insurance_filing"],
        path: "/insurance-filing",
        httpCode: 200
    },
    generation_promissory: {
        method: "POST",
        url_base: "rest_api_capabilities",
        body: body["generation_promissory"],
        path: "/generation-promissory",
        httpCode: 200
    },
    wss_validacion_promissory: {
        method: "WSS",
        url_base: "wss_url_base",
        body: body["wss_validacion_promissory"],
        path: "",
        httpCode: 200
    }
}