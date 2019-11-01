import { Component } from '@angular/core';

import * as UI from '@maxmind/core/ui';

@Component({
  selector: 'app-root',
  template: `
    <div [ngClass]="UI.Page()">
      <div [ngClass]="UI.Container()">
        <button [ngClass]="UI.AddUserButton()">Add User</button>
        <div [ngClass]="UI.User()">
          <img src="https://placehold.it/72/72">
          <h1>Foo Bar</h1>
          <button [ngClass]="UI.RemoveUserButton()">Remove User</button>
        </div>
        <div [ngClass]="UI.User()">
          <img src="https://placehold.it/72/72">
          <h1>Foo Bar</h1>
          <button [ngClass]="UI.RemoveUserButton()">Remove User</button>
        </div>
        <div [ngClass]="UI.User()">
          <img src="https://placehold.it/72/72">
          <h1>Foo Bar</h1>
          <button [ngClass]="UI.RemoveUserButton()">Remove User</button>
        </div>
        <div [ngClass]="UI.User()">
          <img src="https://placehold.it/72/72">
          <h1>Foo Bar</h1>
          <button [ngClass]="UI.RemoveUserButton()">Remove User</button>
        </div>
        <div [ngClass]="UI.User()">
          <img src="https://placehold.it/72/72">
          <h1>Foo Bar</h1>
          <button [ngClass]="UI.RemoveUserButton()">Remove User</button>
        </div>
      </div>
    </div>
  `,
})

export class AppComponent {
  title = 'angular';
  UI = UI;
}
