import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    stages: [
        {
            duration: '10s',
            target: 20
        },
        {
            duration: '30s',
            target: 20
        },
        {
            duration: '10s',
            target: 0
        }
    ]
}

export default function () {
    http.get('http://192.168.68.108:3000');
    sleep(1);
}