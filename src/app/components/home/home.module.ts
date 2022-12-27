import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { homeRoutes } from './home.routes';
import { LandingComponent } from './landing/landing.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    LandingComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoutes),
    SharedModule
  ]
})
export class HomeModule {}
