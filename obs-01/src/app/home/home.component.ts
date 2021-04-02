import { identifierModuleUrl } from "@angular/compiler";
import { Component, OnDestroy, OnInit } from "@angular/core";

import { interval, Observable, Observer, Subscription } from "rxjs";
import { map, filter } from "rxjs/operators";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor() {}

  private intervalSubscription: Subscription;
O
  ngOnDestroy(): void {
    this.intervalSubscription.unsubscribe();
  }

  ngOnInit() {
    // this.intervalSubscription = interval(1000).subscribe((count) => {
    //   console.log(
    //     "🚀 ~ file: home.component.ts ~ line 16 ~ HomeComponent ~ interval ~ count",
    //     count
    //   );
    // });

    const customIntervalObservable = new Observable(
      (observer: Observer<number>) => {
        let count: number = 0;
        setInterval(() => {
          observer.next(count);
          if (count == 2) {
            observer.complete();
          } else if (count > 3) {
            observer.error(new Error("The count is graeter than 3"));
          }
          count++;
        }, 1000);
      }
    );

    this.intervalSubscription = customIntervalObservable
      .pipe(
        filter((data) => {
          if (data === 1) {
            return false;
          }
          return true;
        }),
        map((data) => {
          return data + 1;
        })
      )
      .subscribe(
        (count) => {
          console.log(
            "🚀 ~ file: home.component.ts ~ line 38 ~ HomeComponent ~ customIntervalObservable.subscribe ~ count",
            count
          );
        },
        (error: Error) => {
          alert(error.message);
        },
        () => {
          console.log("Done");
        }
      );
  }
}
