import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { map, mergeAll, mergeMap, concatAll, concatMap, delay } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.css']
})
export class ConcatMapComponent implements OnInit {

  constructor(private service:DesignUtilityService) { }
  
  getData(data){
    return of(data + 'Video Uploaded').pipe(delay(2000));
  }
  
  ngOnInit():void {
    const source=from(['Tech','Comedy','News']);
    
   

     //using mergeMap()
     source.pipe(
      mergeMap(res=>this.getData(res))
    ).subscribe(res=>{
      console.log(res);
      this.service.print(res,'elContainer1');
    })
    
     
     
     //using map+concatAll
     source.pipe(
       map(res=>this.getData(res)),
       concatAll()
       ).subscribe(res=>{
         console.log(res);
         this.service.print(res,'elContainer2')
        });

         //using mergeMap()
        source.pipe(
          concatMap(res=>this.getData(res))
        ).subscribe(res=>{
          console.log(res);
          this.service.print(res,'elContaine3');
        })
            

      }

}
