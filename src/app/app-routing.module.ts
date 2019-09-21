import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TestComponent} from './components/test/test.component';
import {RouterGard} from './guard/router-gard';
import {MineComponent} from './components/mine/mine.component';

const routes: Routes = [
  {path: 'child', component: TestComponent},
  {path: 'mine', component: MineComponent, canActivate: [RouterGard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
