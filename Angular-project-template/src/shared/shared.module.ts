import { NgModule } from '@angular/core';

// CommonModule
import { CommonModule } from '@angular/common';

// Angular Material
import { AngularMaterialModule } from './angular-material.module';

// Reactive Forms
import { ReactiveFormsModule } from '@angular/forms';

// HTTP calls
import { HttpClientModule } from '@angular/common/http';

// Fontawesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// Flex-layout
import { FlexLayoutModule } from '@angular/flex-layout';

const modules = [
  AngularMaterialModule, // To make use of ALL features of Angular Material
  CommonModule, // To make use of all the basic Angular features
  HttpClientModule, // To make use of HTTP calls
  ReactiveFormsModule, // To make use of Reactive forms,
  FontAwesomeModule, // Font awesome module
  FlexLayoutModule, // To use flex layout
];

@NgModule({
  imports: modules,
  exports: modules,
})
/**
 *  The use of the SharedModule is so that it exports everything it imports for other modules
 *  (with the exception of the AngularMaterialModule) to easily import.
 */
export class SharedModule {}
