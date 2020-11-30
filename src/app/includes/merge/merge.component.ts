import { Component, OnInit } from '@angular/core';
import { interval,merge } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';


@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.css']
})
export class MergeComponent implements OnInit {

  constructor(private service:DesignUtilityService) { }
  ngOnInit(): void {
    const sourceTech=interval(6000).pipe(map(v=>'VideoTech#'+(v+1)),take(5));
    const sourceComedy=interval(3000).pipe(map(v=>'VideoComedy#'+(v+1)),take(5));
    const sourceNews=interval(1000).pipe(map(v=>'VideoNews#'+(v+1)),take(5));

    const finalObject=merge(sourceTech,sourceComedy,sourceNews)
    finalObject.subscribe(res=>{
      console.log(res);
      this.service.print(res,'elContainer')
    })
  }

}
