import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ButtonIconComponent } from "./button-icon/button-icon.component";
import { FormFieldComponent } from "./form-field/form-field.component";
import { ProgressSpinnerComponent } from "./progress-spinner/progress-spinner.component";
import { TabsComponent } from "./tabs/tabs.component";
import { DatepickerComponent } from "./datepicker/datepicker.component";
import { AutocompleteComponent } from "./autocomplete/autocomplete.component";
import { SnackbarComponent } from "./snackbar/snackbar.component";
import { DialogModalComponent } from "./dialog/dialog-modal/dialog-modal.component";
import { DialogComponent } from "./dialog/dialog.component";
import { DatatableComponent } from "./datatable/datatable.component";

const routes: Routes = [
  { path: "button-icons", component: ButtonIconComponent },
  { path: "form-field", component: FormFieldComponent },
  { path: "progress-spinner", component: ProgressSpinnerComponent },
  { path: "tabs", component: TabsComponent },
  { path: "datepicker", component: DatepickerComponent },
  { path: "snackbar", component: SnackbarComponent },
  { path: "autocomplete", component: AutocompleteComponent },
  { path: "dialog", component: DialogComponent },
  { path: "dataTable", component: DatatableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
