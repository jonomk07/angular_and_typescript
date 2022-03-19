import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    
    if(value.length === 0 || args[0] === '') {
      return value
    }
    const array =  value.filter( (item: { name: string; }) => {
     return item.name ===  args[0];
   })
    return array;
  }

}
