import http from 'k6/http';
import { randomIntBetween } from 'https://jslib.k6.io/k6-utils/1.2.0/index.js';

export const options = {
  discardResponseBodies: true,
  scenarios: {
    constant_request_rate: {
      executor: 'constant-arrival-rate',
      rate: 2gm000,
      timeUnit: '1s',
      duration: '30s',
      preAllocatedVUs: 50,
      maxVUs: 5000,
    }
  }
}

export default function () {
  const i = randomIntBetween(900000, 1000000);
  const url = `http://localhost:5500/products/${i}/related`

  const res = http.get(url);
  console.log(`Response time: ${res.timings.duration}`);
};
