import { Pipe, PipeTransform } from "@angular/core";
import * as fromReducer from "../store/shop.reducer";

@Pipe({
  name: "filter",
})
export class FilterPipe implements PipeTransform {
  transform(books: fromReducer.Book[], searchText: string): fromReducer.Book[] {
    if (!books) {
      return [];
    }
    if (!searchText) {
      return books;
    }
    searchText = searchText.toLowerCase();
    return books.filter((it) => {
      return it.title.toLowerCase().includes(searchText);
    });
  }
}
