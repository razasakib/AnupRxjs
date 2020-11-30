import { Component, OnInit } from '@angular/core';
import { interval, from, timer } from 'rxjs';
import { take, takeLast, map, takeUntil } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.css']
})
export class TakeComponent implements OnInit {
  
  constructor(private service:DesignUtilityService) { }

  member=['saukat','alli','ajit','animesh','yamin','twinkle'];
  
  ngOnInit(): void {

    //01
    const nameSource=from(this.member);
    /*const source=interval(1000).pipe(
      take(5)
    );*/

    nameSource.pipe(
      take(3)
    ).subscribe(res=>{
      console.log(res);
      this.service.print(res,'elContainer1');
    });

    //2
    nameSource.pipe(
     takeLast(3)
    ).subscribe(res=>{
      console.log(res);
      this.service.print(res,'elContainer2');
    });

    //3.takeUntil
    const source=interval(1000);
    let cond1=timer(6000);
      
    source.pipe(
      map(res=>{
        "Number"+res
      }),
      takeUntil(cond1)
    ).subscribe(res=>{
      console.log(res);
      this.service.print(res,'elContainer3');
    });
    
  }

}
