import {Injectable} from '@angular/core';
import {Pirate} from './pirate';
import { PIRATES } from './mock-pirates';


@Injectable()
export class PirateService {
  getPirates(): Promise<Pirate[]> {
    return Promise.resolve(PIRATES);
  }

  getPiratesSlowly(): Promise<Pirate[]>{
    return new Promise(resolve => {
      setTimeout(() => resolve(this.getPirates()), 2000);
    });
  }
}

