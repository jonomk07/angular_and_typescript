import { PipeTransform , Pipe } from '@angular/core';

@Pipe({
    name: 'mycustompipe'
})
export class CustomPipe implements PipeTransform {

    // transform is a method that takes in a value and returns a value
    transform(value: number, toSum: number, title: string) {
        if ( toSum > 40) {
            return `${title} = ${value + toSum}`;
        } else {
            return `${title} = ${value}`;
        }
        return value;
    }
}