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
  this.highlight(result1,"areaOne",this.textarea);
  this.highlight(result1,"areaTwo",this.textarea2);
  this.highlight(result1,"areaThree",this.textarea3);

}
highlight(errors: Array<number>, id:string, allText:string) :void{
  var inputText = document.getElementById(id);
  inputText.innerHTML=allText
  var innerHTML = inputText.innerHTML;
  var i;
  var startarray = 0;
  for(i = 0; i< errors.length; i++){
    var currentNumber=  errors[i]
    var endHightlight = 
    var count= 0;
    var noSpace = true
    while(noSpace){
      count++;
      if(currentNumber+count ==errors[i+1]){
        i++;
      }
      else{
        noSpace = false;

      }
    }
    // innerHTML = innerHTML.substring(startarray,i) + "<span class='highlight'>" + innerHTML.substring(index,index+text.length) + "</span>" + innerHTML.substring(index + text.length);
  }
  // innerHTML = innerHTML.substring(0,index) + "<span class='highlight'>" + innerHTML.substring(index,index+text.length) + "</span>" + innerHTML.substring(index + text.length);
   //inputText.innerHTML = innerHTML;
  
}

//Method compares each character placement in strings.
compareValues(value: string, value2: string): Array<number> {
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
