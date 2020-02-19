import { Component } from '@angular/core';
import * as JsDiff from 'diff';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  textarea: string; textarea2: string;textarea3: string;
//Button Press
compare():void{
  console.log(this.textarea + this.textarea2 + this.textarea3)
}

compareValues(value: string, value2: string): void{

}
}
