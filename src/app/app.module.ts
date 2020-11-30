import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './includes/header/header.component';
import { PromiseComponent } from './includes/promise/promise.component';
import { ObservableComponent } from './includes/observable/observable.component';
import { ListComponent } from './includes/observable/list/list.component';
import { FromEventComponent } from './includes/observable/from-event/from-event.component';
import { DesignUtilityService } from './appServices/design-utility.service';
import { IntervalComponent } from './includes/interval/interval.component';
import { OfFromComponent } from './includes/of-from/of-from.component';
import { CustomComponent } from './includes/custom/custom.component';
import { MapComponent } from './includes/map/map.component';
import { PluckComponent } from './includes/pluck/pluck.component';
import { FilterComponent } from './includes/filter/filter.component';
import { TabComponent } from './includes/tab/tab.component';
import { TakeComponent } from './includes/take/take.component';
import { RetryComponent } from './includes/retry/retry.component';
import { DebounceTimeComponent } from './includes/debounce-time/debounce-time.component';
import { MergeComponent } from './includes/merge/merge.component';
import { ConcatComponent } from './includes/concat/concat.component';
import { MergeMapComponent } from './includes/merge-map/merge-map.component';
import { ConcatMapComponent } from './includes/concat-map/concat-map.component';
import { ToArrayComponent } from './includes/to-array/to-array.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PromiseComponent,
    ObservableComponent,
    ListComponent,
    FromEventComponent,
    IntervalComponent,
    OfFromComponent,
    CustomComponent,
    MapComponent,
    PluckComponent,
    FilterComponent,
    TabComponent,
    TakeComponent,
    RetryComponent,
    DebounceTimeComponent,
    MergeComponent,
    ConcatComponent,
    MergeMapComponent,
    ConcatMapComponent,
    ToArrayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DesignUtilityService],
  bootstrap: [ToArrayComponent]
})
export class AppModule { }
