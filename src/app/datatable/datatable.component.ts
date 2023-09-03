import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { DATA_MOVIES } from "./model/data-movie";
import { MatPaginator, PageEvent } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { MatSort } from "@angular/material/sort";

@Component({
  selector: "app-datatable",
  templateUrl: "./datatable.component.html",
  styleUrls: ["./datatable.component.scss"],
})
export class DatatableComponent implements OnInit, AfterViewInit {
  dataSource = new MatTableDataSource(DATA_MOVIES);
  displayColumns = ["name", "category", "year", "director"];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;

  ngOnInit(): void {
    // this.dataSource = this.dataSource;
  }

  ngAfterViewInit(): void {
    this.paginator._intl.itemsPerPageLabel = "Itens por página";
    this.paginator._intl.nextPageLabel = "Próximo";
    this.paginator._intl.previousPageLabel = "Voltar";
    this.dataSource.sort = this.matSort;
    this.dataSource.paginator = this.paginator;
  }

  handlePageEvent(event: PageEvent) {
    console.log(event);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
