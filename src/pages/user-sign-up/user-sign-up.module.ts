import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserSignUpPage } from './user-sign-up';

@NgModule({
  declarations: [
    UserSignUpPage,
  ],
  imports: [
    IonicPageModule.forChild(UserSignUpPage),
  ],
})
export class UserSignUpPageModule {}
