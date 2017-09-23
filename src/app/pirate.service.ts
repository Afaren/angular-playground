import {Injectable} from '@angular/core';
import {Pirate} from './pirate';
import { PIRATES } from './mock-pirates';


@Injectable()
export class PirateService {
  getPirates(): Promise<Pirate[]> {
    return Promise.resolve(PIRATES);
  }
}

