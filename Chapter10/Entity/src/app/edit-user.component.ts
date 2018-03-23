import { Component, OnInit, Output, Input, EventEmitter } from "@angular/core";

@Component({
  selector: "edit-user",
  template: `
    <div>
      <input [(ngModel)]="user.name" />
      <button (click)="save.emit(user)" >Save</button>
    </div>
  `
})
export class EditUserComponent implements OnInit {
  private _user;

  @Input()
  get user() {
    return this._user;
  }

  set user(val) {
    this._user = Object.assign({}, val);
  }

  @Output() save = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
