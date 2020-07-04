import { Component, OnInit } from '@angular/core';
import { CoronaService } from '../corona.service';//import api service...

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
coronaList:[]
data:[]
  constructor( private api:CoronaService ) { }
  

  ngOnInit(): void { //calling the method from api service....
    this.api.getdata().subscribe((data)=>{
this.coronaList=data;
      console.log(data)
    })
  }
  

}
