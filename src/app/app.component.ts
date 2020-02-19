import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  textarea: any;textarea2: any;textarea3: any;
compare(value:string ,secondValue:string ,thirdValue:string ):void{
  console.log(value + ' ' + secondValue +' ' + thirdValue)
  //(value: string, secondValue: string ,thirdValue:string)
}
}
