import { OnDestroy } from "@angular/core";
import { Subject, Subscription, interval, takeUntil/*, takeUntilDestroyed*/ } from "rxjs";

export class Demo implements OnDestroy {
    timer$ = interval(1000);
    sub!: Subscription;

    constructor() {
        this.sub = this.timer$.subscribe();
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }

}

/*
export class Demo2 implements OnDestroy {
    timer$ = interval(1000);
    subject = new Subject();

    constructor() {
        this.timer$
            .pipe(takeUntil(this.subject))
            .subscribe();
    }

    ngOnDestroy(): void {
        this.subject.next();
        this.subject.complete();
    }
}

export class Demo3 {
    timer$ = interval(1000);

    constructor() {
        this.timer$
            .pipe(
                takeUntilDestroyed()
            )
            .subscribe();
    }
}
*/