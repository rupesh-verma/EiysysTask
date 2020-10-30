import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';
import { Branches } from 'src/app/components/model/branches';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Branches[], term: string): unknown {
    return value.filter((e) => {
      return e.address.toLowerCase().includes(term.toLowerCase())
        || e.branch.toLowerCase().includes(term.toLowerCase())
        || e.city.toLowerCase().includes(term.toLowerCase());
    });
  }
}
