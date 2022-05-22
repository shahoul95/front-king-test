import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {
  transform(kings: any, args?: any) {
   return kings?.filter(function(item: any) {
     return  JSON.stringify(item).includes(args);
   })
  }

}
