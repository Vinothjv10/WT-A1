import { Pipe, PipeTransform } from '@angular/core';
import { Jobs } from '../auth/models/item';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: Jobs[], filterString: string): Jobs[] {

    if (!items) return items;

    return items.filter(job =>

      job.name.toLocaleLowerCase().includes(filterString.toLocaleLowerCase())
    );

  }


}
