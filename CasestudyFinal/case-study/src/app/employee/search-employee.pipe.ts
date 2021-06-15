import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchEmployee'
})
export class SearchEmployeePipe implements PipeTransform {

  transform(items: Array<any>, nameSearch: string, emailSearch: string, addressSearch: string) {
    if (items && items.length) {
      return items.filter(item => {
        if (nameSearch && item.name.toLowerCase().indexOf(nameSearch.toLowerCase()) === -1) {
          return false;
        }
        if (emailSearch && item.email.toLowerCase().indexOf(emailSearch.toLowerCase()) === -1) {
          return false;
        }
        if (addressSearch && item.address.toLowerCase().indexOf(addressSearch.toLowerCase()) === -1) {
          return false;
        }
        return true;
      });
    } else {
      return items;
    }
  }

}
