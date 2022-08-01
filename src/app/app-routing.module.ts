import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomObservableComponent } from './components/observable/custom-observable/custom-observable.component';
import { FilterComponent } from './components/observable/filter/filter.component';
import { FromEventComponent } from './components/observable/from-event/from-event.component';
import { IntervalComponent } from './components/observable/interval/interval.component';
import { ListComponent } from './components/observable/list/list.component';
import { MapComponent } from './components/observable/map/map.component';
import { ObservableComponent } from './components/observable/observable.component';
import { OfFromComponent } from './components/observable/of-from/of-from.component';
import { PluckComponent } from './components/observable/pluck/pluck.component';
import { TapComponent } from './components/observable/tap/tap.component';
import { ToArrayComponent } from './components/observable/to-array/to-array.component';
import { PromiseComponent } from './components/promise/promise.component';

const routes: Routes = [
  {path: 'promise', component: PromiseComponent},
  {path: 'observable', component: ObservableComponent, children: [
    {path: '', component: ListComponent},
    {path: 'fromEvent', component: FromEventComponent},
    {path: 'interval', component: IntervalComponent},
    {path: 'ofFrom', component: OfFromComponent},
    {path: 'toArray', component: ToArrayComponent},
    {path: 'customObservable', component: CustomObservableComponent},
    {path: 'map', component: MapComponent},
    {path: 'pluck', component: PluckComponent},
    {path: 'filter', component: FilterComponent},
    {path: 'tap', component: TapComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
