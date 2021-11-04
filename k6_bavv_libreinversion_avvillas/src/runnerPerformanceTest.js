import { sleep } from 'k6';
import { Rate } from 'k6/metrics';
import * as TYPE_TEST from './options/type_test.js'
import * as COMPOSER from './questions/test_compose.js'

export let errorRate = new Rate('errors');

export let options = TYPE_TEST.parametrization_test[__ENV.TYPE_TEST];

export default function() {
    errorRate.add(!COMPOSER.validation_test({ TEST: __ENV.TEST }));
    sleep(1);
}