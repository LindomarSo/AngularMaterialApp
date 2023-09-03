import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-modal',
  templateUrl: './dialog-modal.component.html',
  styleUrls: ['./dialog-modal.component.scss']
})
export class DialogModalComponent {

  obj = { name: 'Lindomar', lastName: 'Dias'}

  constructor(private dialogRef: MatDialogRef<DialogModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data:string){

  }

  onClose(){
    this.dialogRef.close(true);
  }
}
