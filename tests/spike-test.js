import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    stages: [
        {
            duration: '2m',
            target: 10000
        },
        {
            duration: '1m',
            target: 0
        }
    ]
}

export default function () {
    http.get('http://192.168.68.108:3000');
    sleep(1);
}