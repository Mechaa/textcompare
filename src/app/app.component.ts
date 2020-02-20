import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  textarea: string; textarea2: string;textarea3: string;
//Button Press
compare():void{
  var result1 = this.compareValues(this.textarea,this.textarea2);
  console.log(result1)
}


//Method compares each character placement in strings.
compareValues(value: string, value2: string): Array<Number>[] {
  var array= Array.from(value);
  var array2 = Array.from(value2);
  var result = [];
  var i;
  for (i = 0; i < array.length; i++) {
      if(array[i] !== array2[i]){
        result.push(i);
      }
  }
  return result;
}
}
