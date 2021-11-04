module.exports = {
    "parametrization_test": {
        "smoke_test": {
            vus: 1,
            iterations: 1,
            duration: '1m',
        },
        "constant_vus": {
            vus: 14,
            rps: 7,
            duration: '10m',
            tags: {
                stack: 'Gets', // variable de entorno
                layer: 'TestGets', // variable de entorno
                env: 'qa', // variable de entorno
                service: 'Test User App',
                type_test: 'smoke_test'
            }
        },
        "load_test": {
            stages: [
                { duration: "1m", target: 7, rps: 5 },
                { duration: "1m", target: 7, rps: 5 },
                { duration: "45s", target: 0, rps: 5 }
            ],
            thresholds: {
                'http_req_duration': ['p(99)<150000'], // 99% of requests must complete below 1.5s
                'logged in successfully': ['p(99)<150000'], // 99% of requests must complete below 1.5s
            },
            tags: {
                stack: 'GETs', // variable de entorno
                layer: 'TestGets', // variable de entorno
                env: 'qa', // variable de entorno
                service: 'Test User App',
                type_test: 'load_test'
            }
        },
        "stress_test": {
            stages: [
                { duration: '1m', target: 10 },
                { duration: '1m', target: 10 },
                { duration: '1m', target: 18 },
                { duration: '1m', target: 18 },
                { duration: '1m', target: 25 },
                { duration: '1m', target: 25 },
                { duration: '1m', target: 0 },
            ],
            thresholds: {
                errors: ['rate<0.5'], // <5% errors
            },
        }
    }
}