import { Pipe, PipeTransform } from '@angular/core';
import {IKingfrench} from "../../interface/Ikingfrench";

@Pipe({
  name: 'ascending'
})
export class AscendingPipe implements PipeTransform {

  transform(kings: any) : Array<IKingfrench> {
      return kings?.sort((a: { date_of_birth: number; }, b: { date_of_birth: number; } ) => a.date_of_birth - b.date_of_birth);
  }

}
