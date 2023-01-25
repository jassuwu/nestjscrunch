import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { HealthcheckService } from './healthcheck.service';

@ApiTags('Healthcheck')
@Controller('healthcheck')
export class HealthcheckController {
    constructor(private healthcheckService: HealthcheckService) { }
    @HttpCode(HttpStatus.OK)
    @Get()
    healthCheck() {
        return this.healthcheckService.healthCheck();
    }
}
