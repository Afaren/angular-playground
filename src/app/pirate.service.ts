import {Injectable} from '@angular/core';
import {Pirate} from './pirate';
import { PIRATES } from './mock-pirates';


@Injectable()
export class PirateService {
  getPirate(): Pirate[] {
    return PIRATES;
  }
}

