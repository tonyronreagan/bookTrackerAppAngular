import {NgModule, SkipSelf, Optional} from '@angular/core';
import { CommonModule } from '@angular/common';
import {DataService} from './data.service';
import {LoggerService} from './logger.service.';
import {createSkipSelf} from '@angular/compiler/src/core';
import {throwIfAlreadyLoaded} from './module-import.guard';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers : [LoggerService, DataService]
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

}
