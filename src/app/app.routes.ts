import {RouterModule, Routes} from '@angular/router';
import {NgModule} from "@angular/core";
import {ProductComponent} from "./product/product.component";
import {MainComponent} from "./main/main.component";
import {ProfileComponent} from "./profile/profile.component";


export const routes: Routes = [
  { path: 'product/:item', component: ProductComponent },
  { path: 'profile', component: ProfileComponent },
  // { path: 'main', component: MainComponent},
  { path: '', component: MainComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
