import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent implements OnInit {

  options = ['Maçã', 'Uva', 'Banana', 'Laranja']
  myControl = new FormControl();

  filterOptions = new Observable<string[]>();

  ngOnInit(): void {
    this.filterOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value: string) => {
        return this.options.filter(x => x.toLowerCase().includes(value.toLowerCase()))
      })
    )
  }
}
