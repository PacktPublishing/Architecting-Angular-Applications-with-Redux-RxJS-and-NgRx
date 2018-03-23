// my-serializer.ts
import { RouterStateSerializer } from '@ngrx/router-store';
import { RouterStateSnapshot } from '@angular/router';

interface MyState {
  url: string;
  queryParams;
  params;
}

export class MySerializer implements RouterStateSerializer<MyState> {
  serialize(routerState: RouterStateSnapshot): MyState {
    console.log('serializer');
    console.log('complete router state', routerState);

    const { url, root: { queryParams } } = routerState;

    const state = {
      url,
      queryParams,
      params: {}
    };

    // firstChild will not exist on default route /
    // for routes products/1 , params will be { id: 1 }
    if (routerState.root.firstChild) {
      const { root: { firstChild: { params } } } = routerState;
      state.params = params;
    }

    // params?

    return state;
  }
}
