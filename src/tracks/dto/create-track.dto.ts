import { IsIn, IsNotEmpty, IsUrl, MaxLength } from 'class-validator';
import { Provider } from '../schemas/track.schema';

const providers = ['youtube', 'soundCloud'];

export class CreateTrackDto {
  @IsIn(providers, {
    message: `Track must have a valid provider: ${providers.map((i) => `"${i}"`).join(', ')}`,
  })
  provider: Provider;

  @MaxLength(256, { message: 'Track source is too long' })
  @IsNotEmpty()
  source: string;

  @MaxLength(64, { message: 'Track name is too long' })
  @IsNotEmpty({ message: 'Track name is required' })
  name: string;

  @MaxLength(64, { message: 'Artist name is too long' })
  @IsNotEmpty({ message: 'Artist name is required' })
  artist: string;

  @IsUrl(undefined, { message: 'Cover must be a valid image URL' })
  cover: string;
}
