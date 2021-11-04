module.exports = {
    env: {
        STG: {
            wss_url_base: 'wss://250satco0b.execute-api.us-east-2.amazonaws.com/stg?Authorization=*',
            rest_api_public: 'https://f686k7s77c.execute-api.us-east-2.amazonaws.com/stg',
            rest_api_capabilities: 'https://kik6dxz4l9.execute-api.us-east-2.amazonaws.com/stg',
        },
        DEV: {
            wss_url_base: 'wss://9ek11wq4r6.execute-api.us-east-2.amazonaws.com/dev?Authorization=*',
            rest_api_public: 'https://bg7af8nwrl.execute-api.us-east-2.amazonaws.com/stg',
            rest_api_capabilities: 'https://g17a6qcswb.execute-api.us-east-2.amazonaws.com/stg',

        },
        PRO: {
            wss_url_base: 'wss://9ek11wq4r6.execute-api.us-east-2.amazonaws.com/pro?Authorization=*',
            rest_api_public: 'https://bg7af8nwrl.execute-api.us-east-2.amazonaws.com/pro',
            rest_api_capabilities: 'https://g17a6qcswb.execute-api.us-east-2.amazonaws.com/pro',
        },
    }
}