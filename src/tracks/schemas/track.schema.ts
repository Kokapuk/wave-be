import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TrackDocument = HydratedDocument<Track>;
export type Provider = 'youtube' | 'soundCloud';

@Schema()
export class Track {
  @Prop()
  provider: Provider;

  @Prop()
  source: string;

  @Prop()
  name: string;

  @Prop()
  artist: string;

  @Prop()
  cover: string;
}

export const TrackSchema = SchemaFactory.createForClass(Track);
