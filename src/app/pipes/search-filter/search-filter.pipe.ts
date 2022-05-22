import { Pipe, PipeTransform } from '@angular/core';
import {IKingfrench} from "../../interface/Ikingfrench";

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {
  transform(kings: Array<IKingfrench>, args?: string) {
   return kings?.filter(function(item: any) {
     return  JSON.stringify(item).includes(<string>args);
   })
  }

}
