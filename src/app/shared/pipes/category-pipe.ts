import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryPipe'
})
export class CategoryPipe implements PipeTransform {

  transform(value: string): string {

    switch(value) {
      case 'Frontend': return 'code';
      case 'Backend': return 'computer';
    }
    return 'grading';
  }

}
