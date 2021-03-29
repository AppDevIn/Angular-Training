import { Component, OnDestroy, OnInit } from "@angular/core";

import { interval, Subscription } from "rxjs";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor() {}

  private intervalSubscription: Subscription;

  ngOnDestroy(): void {
    this.intervalSubscription.unsubscribe();
  }

  ngOnInit() {
    this.intervalSubscription = interval(1000).subscribe((count) => {
      console.log(
        "🚀 ~ file: home.component.ts ~ line 16 ~ HomeComponent ~ interval ~ count",
        count
      );
    });
  }
}
