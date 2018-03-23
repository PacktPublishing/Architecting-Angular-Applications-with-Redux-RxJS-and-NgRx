export class Observer {
  hasError: boolean;
  isCompleted: boolean;

  constructor(private dataFn, private errorFn, private completeFn) {}

  next(value) {
    if (!this.hasError && !this.isCompleted) {
      this.dataFn(value);
    }
  }

  error(err) {
    this.errorFn(err);
    this.hasError = true;
  }

  complete() {
    this.completeFn();
    this.isCompleted = true;
  }
}
