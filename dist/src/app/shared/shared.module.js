import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyComponentMainComponent } from './components/my-component-main/my-component-main.component';
let SharedModule = class SharedModule {
};
SharedModule = __decorate([
    NgModule({
        declarations: [MyComponentMainComponent],
        imports: [
            CommonModule
        ],
        exports: [MyComponentMainComponent]
    })
], SharedModule);
export { SharedModule };
//# sourceMappingURL=shared.module.js.map