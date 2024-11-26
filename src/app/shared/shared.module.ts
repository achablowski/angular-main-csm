import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyComponentMainComponent } from './components/my-component-main/my-component-main.component';



@NgModule({
  declarations: [MyComponentMainComponent],
  imports: [
    CommonModule
  ],
  exports: [MyComponentMainComponent]
})
export class SharedModule { }
