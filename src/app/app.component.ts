import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout'
import { MatSidenav } from '@angular/material/sidenav';
import { map, pluck } from 'rxjs/operators';
import { fromEvent } from 'rxjs';

// Identificar qual elemento estamos pegando
export const SCROLL_CONTAINER = 'mat-sidenav-content';
// Quantos pixels tem que passar para que o meu texto seja apresentado
export const TEXT_LIMIT = 50;
// Quantos pixels tem que passar para aparecer um sombreado
export const SHADOW_LIMIT = 100;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public isSmallScreen: boolean = false;
  public popText: boolean = false;
  public applyShadow: boolean = false;

  @ViewChild(MatSidenav) sideNav!: MatSidenav;

  constructor(private breakpointObserver: BreakpointObserver){}

  ngOnInit(): void {
    let content = document.getElementsByClassName(SCROLL_CONTAINER)[0];

    fromEvent(content, 'scroll')
    .pipe(map(() => content.scrollTop))
    .subscribe({
      next: (event: number) => this.determineHeader(event)
    })
  }

  ngAfterContentInit(): void {
    // this.traditional();

    // Outra forma de fazer usando o operador PLUCK
    // this.pluck();

    // Esta é a forma que substitui o pluck
    this.breakpointObserver.observe(['(max-width: 800px)'])
      .subscribe(res => this.isSmallScreen = res.matches);
  }

  determineHeader(top: number){
    this.popText = top >= TEXT_LIMIT;
    this.applyShadow = top >= SHADOW_LIMIT;
  }

  private traditional():void {
    this.breakpointObserver.observe(['(max-width: 1600px)']).subscribe({
      next: (res) => {
        if(res.matches){
          if(this.sideNav) this.sideNav.mode = 'over'
          this.sideNav?.close();
        }else{
          this.sideNav?.open();
          if(this.sideNav) this.sideNav.mode = 'push'
        }
      }
    });
  }

  private pluck():void {
    this.breakpointObserver.observe(['(max-width: 1600px)'])
      .pipe(pluck('matches'))
      .subscribe(res => this.isSmallScreen = res);
  }

  get sideNavMode(){
    return this.isSmallScreen ? 'over' : 'push'
  }
}
