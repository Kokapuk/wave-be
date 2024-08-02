import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Track } from './schemas/track.schema';
import { CreateTrackDto } from './dto/create-track.dto';

@Injectable()
export class TracksService {
  constructor(@InjectModel(Track.name) private trackModel: Model<Track>) {}

  async create(createTrackDto: CreateTrackDto): Promise<Track> {
    const createdTrack = new this.trackModel(createTrackDto);
    return createdTrack.save();
  }

  async find(page: number): Promise<Track[]> {
    const perPage = 32;

    return this.trackModel
      .find()
      .limit(perPage)
      .skip((page - 1) * perPage)
      .exec();
  }
}
