import { Pipe } from "@angular/core";
import { List } from '../../models/list';

@Pipe({
  name: "orderby"
})
export class OrderByPipe {
  transform(array: List[]): List[] {
    array.sort((a: any, b: any) => {
        let date1 = new Date(a.due_date);
        let date2 = new Date(b.due_date);
      if (date1 < date2) {
        return -1;
      } else if (date1 > date2) {
        return 1;
      } else {
        return 0;
      }
    });
    return array;
  }
}