import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthcheckService {
    healthCheck() {
        return { message: 'We healthy here :)' }
    }
}
