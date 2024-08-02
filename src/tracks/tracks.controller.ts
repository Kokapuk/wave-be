import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CreateTrackDto } from './dto/create-track.dto';
import { FindTracksDto } from './dto/find-tracks.dto';
import { TracksService } from './tracks.service';

@Controller('tracks')
export class TracksController {
  constructor(private tracksService: TracksService) {}

  @Post()
  async create(@Body() createTrackDto: CreateTrackDto) {
    return this.tracksService.create(createTrackDto);
  }

  @Get()
  async find(@Query() query: FindTracksDto) {
    return this.tracksService.find(query.page);
  }
}
