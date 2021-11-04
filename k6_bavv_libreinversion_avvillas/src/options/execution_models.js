import http from 'k6/http';
import ws from 'k6/ws';
import * as HEADERS from '../resources/unitaries_test_performance/models/headers.js'
import * as ENVTEST from '../resources/environments.js'
import * as TEST_CASE from '../resources/unitaries_test_performance/test_case.js'
import { URLSearchParams } from 'https://jslib.k6.io/url/1.0.0/index.js';

export let executor = ({
    url = ENVTEST.env[__ENV.ENVTEST][TEST_CASE[__ENV.TEST].url_base] + TEST_CASE[__ENV.TEST].path,
    body = JSON.stringify(TEST_CASE[__ENV.TEST].body),
    headers = HEADERS,
    method = TEST_CASE[__ENV.TEST].method
}) => {
    let execution;
    switch (method) {
        case 'POST':
            execution = post_execution(url, body, headers);
            break;
        case 'WSS':
            execution = wss_execution({ url: url, body: body });
            break;
        case 'GET':
            execution = get_execution(url, body, headers);
            break;
    }
    return execution;
}

export const post_execution = (url, body, headers) => {
    return http.post(url, body, headers);
}

export const get_execution = (url, body, headers) => {
    const searchParams = new URLSearchParams(body);
    return http.get(`${url}?${searchParams.toString()}`, headers);
}


export const wss_execution = ({ url, params = get_token_auth_wss(), body }) => {
    let resolve = "";
    console.log("Request count : ", url, JSON.stringify(params));
    ws.connect(url, params, function(socket) {
        socket.on('open', () => console.log('connected'));
        socket.on('close', () => console.log('disconnected'));
        socket.send(body);
        socket.on('message', (data) => {
            if (data.includes("httpCode")) {
                resolve = data;
                socket.close();
            }

        });
    });
    return resolve;
}
export const get_token_auth_wss = () => {
    let body = TEST_CASE["otp_security"].body;
    let url = ENVTEST.env[__ENV.ENVTEST][TEST_CASE["otp_security"].url_base] + TEST_CASE["otp_security"].path;
    let res = http.post(url, JSON.stringify(body), HEADERS);
    let token = JSON.parse(res.body).body['token'];
    let params = {
        headers: { 'Sec-WebSocket-Protocol': token + '*' + HEADERS.headers['x-transaction-id'] },
        //headers: { 'Sec-WebSocket-Protocol': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGlmaWNhdGlvbk51bWJlciI6IjEwNTM2NjYxODQiLCJpZGVudGlmaWNhdGlvblR5cGUiOiJDQyIsInRyYW5zYWN0aW9uSWQiOiJlOGU5NTMyZC0yZjRjLTQ4MzEtOTE1Ny0yNWM5NTA0M2MyOGEiLCJpYXQiOjE2MzIyNTQ5NjgsImV4cCI6MTYzMjI1NjE2OH0.qXL6sJw-VeVgZ5AwPU9P1HU5FfWpwKa3nsaXGl9Ef04' + '*' + 'e8e9532d-2f4c-4831-9157-25c95043c28a' },
    };
    return params;
}

export const get_token_auth = () => {
    let body = TEST_CASE["otp_security"].body;
    let url = ENVTEST.env[__ENV.ENVTEST][TEST_CASE["otp_security"].url_base] + TEST_CASE["otp_security"].path;
    let res = http.post(url, JSON.stringify(body), HEADERS);
    console.log("RESSSS ---> ", JSON.stringify(res));
    return JSON.parse(res.body).body['token'];
}