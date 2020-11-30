import { Component, OnInit } from '@angular/core';
import { interval, concat } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html',
  styleUrls: ['./concat.component.css']
})
export class ConcatComponent implements OnInit {
  constructor(private service:DesignUtilityService) { }
  ngOnInit(): void {
    const sourceTech=interval(1000).pipe(map(v=>'VideoTech#'+(v+1)),take(5));
    const sourceComedy=interval(1000).pipe(map(v=>'VideoComedy#'+(v+1)),take(5));
    const sourceNews=interval(1000).pipe(map(v=>'VideoNews#'+(v+1)),take(5));

    const finalObject=concat(sourceTech,sourceComedy,sourceNews)
    finalObject.subscribe(res=>{
      console.log(res);
      this.service.print(res,'elContainer')
    })
  }

  

}
