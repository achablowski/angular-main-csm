import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from '../public-api';

@NgModule({
  declarations: [TestComponent],
  imports: [CommonModule],
  exports: [TestComponent],
})
export class SharedModule {}
