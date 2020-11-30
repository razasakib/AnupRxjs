import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { map, mergeAll, mergeMap } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.css']
})

export class MergeMapComponent implements OnInit {
  
  constructor(private service:DesignUtilityService) { }
  
  getData(data){
    return of(data + 'Video Uploaded');
  }
  
  ngOnInit():void {
    const source=from(['Tech','Comedy','News']);
    
   

    //using double subscriber
    source.pipe(
     map(res=>this.getData(res))
    ).subscribe(res=>{
      res.subscribe(res2=>{

        console.log(res2);
        this.service.print(res2,'elContainer1');
      })
     })
    
     
     
     //using margeAll
     source.pipe(
       map(res=>this.getData(res)),
       mergeAll()
       ).subscribe(res=>{
         console.log(res);
         this.service.print(res,'elContainer2')
        });

         //using mergeMap()
        source.pipe(
          mergeMap(res=>this.getData(res))
        ).subscribe(res=>{
          console.log(res);
          this.service.print(res,'elContaine3');
        })
            

      }
      
      
    }
