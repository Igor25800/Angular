import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cenzor',
  templateUrl: './cenzor.component.html',
  styleUrls: ['./cenzor.component.scss']
})
export class CenzorComponent implements OnInit {

  intValue:string
  arr:Array<string> = ['java','tottnham']
  textArea:string

  constructor() { }

  ngOnInit(): void {
  }

  addWords(intValue:string):void {
    if(this.intValue.length > 0){
      this.arr.push(intValue)
      this.intValue =''
    }
  }
  resetWords():void{
    this.arr = []
  }
  cenzorWords(){
    const text:Array<string> = this.textArea.split(/[.,\/ -]/)
    this.arr.filter(el=>text.filter((elText,i, arr)=> el === elText ? arr[i] ='*'.repeat(elText.length) : el))
    this.textArea  = text.join(' ')
  }
}
