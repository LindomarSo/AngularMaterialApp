import { Component } from "@angular/core";
import { ProgressBarMode } from "@angular/material/progress-bar";
import { concat, delay, interval, map, take, takeWhile, tap } from "rxjs";

@Component({
  selector: "app-progress-spinner",
  templateUrl: "./progress-spinner.component.html",
  styleUrls: ["./progress-spinner.component.scss"],
})
export class ProgressSpinnerComponent {
  progressPercent = 50;
  progressWaitingCase = 50;
  progressMode: ProgressBarMode = "query";
  playbackValue = 0;
  playbackBufferValue = 0;

  ngOnInit(): void {
    this.loadingProgress(500,100)
    .subscribe((res) => (this.progressPercent = res));


    // this.loadingProgress(500,100)
    // .subscribe((res) => (this.playbackValue = res));

    this.loadingProgress(350,100)
    .subscribe((res) => (this.playbackBufferValue = res));

    // Concat primeiro executa um observable e depois o outro
    // No concat o ideal é se inscrever apenas uma vez por isso usar o take
    concat(
      interval(2000).pipe(
        take(1), // Vai executar o interval apenas uma vez
        tap((_) => {
          // Chamará um observer, next, error, complete
          this.progressMode = "determinate";
          // console.log('tap', _);
        })
      ),
      this.loadingProgress(500, 100)
    ).subscribe((res) => (this.progressWaitingCase = res));
  }

  loadingProgress(speed: number, takeUntil: number) {
    return interval(speed).pipe(
      map((i) => i * 5),
      takeWhile((i) => i <= takeUntil)
    );
  }
}
