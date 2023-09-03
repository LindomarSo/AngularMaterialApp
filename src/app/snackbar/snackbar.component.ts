import { Component, OnInit } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { SnackbarMsnComponent } from "./snackbar-msn/snackbar-msn.component";

@Component({
  selector: "app-snackbar",
  templateUrl: "./snackbar.component.html",
  styleUrls: ["./snackbar.component.scss"],
})
export class SnackbarComponent implements OnInit {
  constructor(private snackbar: MatSnackBar) {}

  ngOnInit(): void {
    // this.snackbar.open("Olá mundo", 'Fechar')
  }

  openSnackBar(): void {
    var snackBar = this.snackbar.open("Olá mundo", "Fechar", {
      duration: 2000,
    });

    snackBar.afterDismissed().subscribe((_) => {
      console.log("Snack fechada");
    });

    snackBar.onAction().subscribe((_) => {
      console.log("O usuário interagiu");
    });
  }

  public openFromComp(){
    this.snackbar.openFromComponent(SnackbarMsnComponent,  {
      data: 'Hello world'
    });
  }
}
