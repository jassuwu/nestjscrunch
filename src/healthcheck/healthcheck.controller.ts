import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { HealthcheckService } from './healthcheck.service';

@Controller('healthcheck')
export class HealthcheckController {
    constructor(private healthcheckService: HealthcheckService) { }
    @HttpCode(HttpStatus.OK)
    @Get()
    healthCheck() {
        return this.healthcheckService.healthCheck();
    }
}
