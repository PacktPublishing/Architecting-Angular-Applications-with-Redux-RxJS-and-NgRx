import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "my-pipe"
})
export class MyPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {}
}
