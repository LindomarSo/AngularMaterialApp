import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { DialogModalComponent } from "./dialog-modal/dialog-modal.component";

@Component({
  selector: "app-diolog",
  templateUrl: "./dialog.component.html",
  styleUrls: ["./dialog.component.scss"],
})
export class DialogComponent {
  constructor(private dialog: MatDialog) {}

  open(): void {
    let dialogRef = this.dialog.open(DialogModalComponent, {
      data: "Lindomar Dias",
    });

    dialogRef.afterClosed().subscribe(res => {
      console.log(res)
    })
  }
}
