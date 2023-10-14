import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  ParseUUIDPipe,
} from '@nestjs/common';
import { StatesService } from './states.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('states')
export class StatesController {
  constructor(private readonly statesService: StatesService) {}

  @ApiTags('States')
  @Post()
  public async createState(@Body() body) {
    return await this.statesService.createState(body);
  }

  @ApiTags('States')
  @Get()
  public async findAllStates() {
    return await this.statesService.findAllStates();
  }

  @ApiTags('States')
  @Get(':id')
  public async findStateById(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.statesService.findStateById(id);
  }

  @ApiTags('States')
  @Delete(':id')
  public async deleteState(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.statesService.deleteState(id);
  }
}
