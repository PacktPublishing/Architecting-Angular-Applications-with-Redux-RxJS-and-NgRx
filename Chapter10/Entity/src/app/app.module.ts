import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { StoreModule, Action } from "@ngrx/store";
import { FormsModule } from "@angular/forms";
import { EntityState, createEntityAdapter, EntityAdapter } from "@ngrx/entity";

import { AppComponent } from "./app.component";
import { EditUserComponent } from "./edit-user.component";
import { ActionPayload } from "./interfaces";
import { User } from "./user.model";

export interface State extends EntityState<User> {
  // additional entity state properties
  selectedUserId: number | null;
}

const userAdapter: EntityAdapter<User> = createEntityAdapter<User>();
const initialState: State = {
  ids: [],
  entities: {},
  selectedUserId: null
};

const initial = userAdapter.getInitialState(initialState);

function userReducer(state = initial, action: ActionPayload<User>): State {
  switch (action.type) {
    case "ADD_USER":
      return userAdapter.addOne(action.payload, state);
    case "REMOVE_USER":
      return userAdapter.removeOne(action.payload.id, state);
    case "UPDATE_USER":
      return userAdapter.updateOne(
        {
          id: action.payload.id,
          changes: action.payload
        },
        state
      );
    default:
      return state;
  }
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = userAdapter.getSelectors();

@NgModule({
  declarations: [AppComponent, EditUserComponent],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({
      users: userReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
