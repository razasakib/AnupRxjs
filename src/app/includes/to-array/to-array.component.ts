import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { toArray } from 'rxjs/operators';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.css']
})
export class ToArrayComponent implements OnInit {
  
  public user=[
   { name:'saukat',age:24,addr:'jajpur'},
   { name:'samsul',age:25,addr:'bbsr'},
   { name:'animesh',age:27,addr:'kenjhor'},
   { name:'humayun',age:26,addr:'bdk'}, 
  ]
  constructor() { }

  ngOnInit(): void {
    const source=from(this.user);

    source.pipe(toArray()).subscribe(res=>console.log(res));

  }

 

}
