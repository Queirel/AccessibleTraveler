import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  ParseUUIDPipe,
  Put,
  NotFoundException,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { PlacesService } from './places.service';
import { ApiTags } from '@nestjs/swagger';
import { CreatePlaceDto } from './dto/create-place.dto';
import { PlaceEntity } from './entities/place.entity';
import { googlePlaceGetId } from 'src/helper/google-place';
import { diskStorage } from 'multer';
import { FileInterceptor } from '@nestjs/platform-express';
import { extname } from 'path';

@Controller('places')
export class PlacesController {
  constructor(private readonly placesService: PlacesService) {}

  // @Get('seed')
  // public async seedPlaces() {
  //   return await this.placesService.seedPlaces();
  // }

  @ApiTags('Places')
  @Post()
  public async createPlace(@Body() body) {
    // public async createPlace(@Body() createPlaceDto: CreatePlaceDto) {
    return await this.placesService.createPlace(body);
  }

  // @ApiTags('Places')
  // @Post('googleid')
  // public async getPlaceId(@Body() address) {
  //   // public async createPlace(@Body() createPlaceDto: CreatePlaceDto) {
  //   return await this.placesService.getPlaceId(address);
  // }

  @ApiTags('Places')
  @Post('placebyid')
  public async googlePlaceGetById(@Body() placeid) {
    // public async createPlace(@Body() createPlaceDto: CreatePlaceDto) {
    return await this.placesService.googlePlaceGetById(placeid);
  }

  @Put(':id')
  public async updatePlace(@Param('id') id: string, @Body() body: any) {
    try {
      return await this.placesService.updatePlace(body, id);
    } catch {}
  }

  @ApiTags('Places')
  @Get()
  public async findAllPlaces(): Promise<PlaceEntity[]> {
    try {
      return await this.placesService.findAllPlaces();
    } catch (err) {
      throw new NotFoundException('Places not found');
    }
  }

  @ApiTags('Places')
  @Get(':id')
  // public async findPlaceById(@Param('id', new ParseUUIDPipe()) id: string) {
  public async findPlaceById(@Param('id') id: string): Promise<PlaceEntity> {
    try {
      return await this.placesService.findPlaceById(id);
    } catch (err) {
      throw new NotFoundException('Place not found');
    }
  }

  @ApiTags('Places')
  @Delete(':id')
  public async deletePlace(@Param('id') id: string) {
    try {
      return await this.placesService.deletePlace(id);
    } catch {}
  }

  @Post('file')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads/etc',
        filename: (req, file, callback) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          const ext = extname(file.originalname);
          const filename = `${uniqueSuffix}${ext}`;
          callback(null, filename);
        },
      }),
    }),
  )
  handleUpload(@UploadedFile() file: Express.Multer.File) {
    console.log('file', file);
    return 'File upload API';
  }
}
