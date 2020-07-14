import { NgModule } from "@angular/core";

//Angular Material modules
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatBadgeModule } from "@angular/material/badge";
import { MatBottomSheetModule } from "@angular/material/bottom-sheet";
import { MatButtonModule } from "@angular/material/button";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatCardModule } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatChipsModule } from "@angular/material/chips";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDialogModule } from "@angular/material/dialog";
import { MatDividerModule } from "@angular/material/divider";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatMenuModule } from "@angular/material/menu";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatRadioModule } from "@angular/material/radio";
import { MatRippleModule } from "@angular/material/core";
import { MatSelectModule } from "@angular/material/select";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatSliderModule } from "@angular/material/slider";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatSortModule } from "@angular/material/sort";
import { MatStepperModule } from "@angular/material/stepper";
import { MatTableModule } from "@angular/material/table";
import { MatTabsModule } from "@angular/material/tabs";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatTreeModule } from "@angular/material/tree";

const components: any[] = [
  MatAutocompleteModule, //https://material.angular.io/components/autocomplete/api
  MatBadgeModule, //https://material.angular.io/components/badge/api
  MatBottomSheetModule, //https://material.angular.io/components/bottom-sheet/api
  MatButtonModule, //https://material.angular.io/components/button/overview
  MatButtonToggleModule, //https://material.angular.io/components/button-toggle/api
  MatCardModule, //https://material.angular.io/components/card/api
  MatCheckboxModule, //https://material.angular.io/components/checkbox/api
  MatChipsModule, //https://material.angular.io/components/chips/api
  MatDatepickerModule, //https://material.angular.io/components/datepicker/api
  MatDialogModule, //https://material.angular.io/components/dialog/api
  MatDividerModule, //https://material.angular.io/components/divider/api
  MatExpansionModule, //https://material.angular.io/components/expansion/api
  MatFormFieldModule, //https://material.angular.io/components/form-field/api
  MatGridListModule, //https://material.angular.io/components/grid-list/api
  MatIconModule, //https://material.angular.io/components/icon/api
  MatInputModule, //https://material.angular.io/components/input/overview
  MatListModule, //https://material.angular.io/components/list/api
  MatMenuModule, //https://material.angular.io/components/menu/api
  MatPaginatorModule, //https://material.angular.io/components/paginator/api
  MatProgressBarModule, //https://material.angular.io/components/progress-bar/api
  MatProgressSpinnerModule, //https://material.angular.io/components/progress-spinner/api
  MatRadioModule, //https://material.angular.io/components/radio/api
  MatRippleModule, //https://material.angular.io/components/ripple/api
  MatSelectModule, //https://material.angular.io/components/select/api
  MatSidenavModule, //https://material.angular.io/components/sidenav/api
  MatSlideToggleModule, //https://material.angular.io/components/slide-toggle/api
  MatSliderModule, //https://material.angular.io/components/slider/api
  MatSnackBarModule, //https://material.angular.io/components/snack-bar/api
  MatSortModule, //https://material.angular.io/components/sort/api
  MatStepperModule, //https://material.angular.io/components/stepper/api
  MatTableModule, //https://material.angular.io/components/table/api
  MatTabsModule, //https://material.angular.io/components/tabs/api
  MatToolbarModule, //https://material.angular.io/components/toolbar/api
  MatTooltipModule, //https://material.angular.io/components/tooltip/api
  MatTreeModule, //https://material.angular.io/components/tree/api
];

@NgModule({
  imports: components,
  exports: components,
})
export class AngularMaterialModule {}