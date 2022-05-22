import { Pipe, PipeTransform } from '@angular/core';
import { Jobs } from '../auth/models/item';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: Jobs[], filterString: string,locationString: string,categoryString: string, countryString: string ,countrystring: string): Jobs[] {
    
    if (!items) return items;
    
    return items.filter(job => 
      
         job.name.toLocaleLowerCase().includes(filterString.toLocaleLowerCase()) &&
         job.country.toLocaleLowerCase().includes(countryString.toLocaleUpperCase()) &&
         job.location.toLocaleLowerCase().includes(locationString.toLocaleLowerCase()) &&
         job.category.toLocaleLowerCase().includes(categoryString.toLocaleLowerCase()) &&
         job.country.toLocaleLowerCase().includes(countrystring.toLocaleLowerCase())
      );
    
   }


}
