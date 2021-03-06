import { Injectable } from '@angular/core';
import { Router, CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/toPromise';

import { GlobalState } from '../global.state';
import { CONSTANT } from '../utils/constant';
import { Utils } from '../utils/utils';

import { SockService } from '../service/client/sock';
import { ClientService } from '../service/client/client';

@Injectable()
export class PagesResolve implements CanActivate {
  constructor(private location: Location, private _state: GlobalState, private _sockService: SockService,
              private clientService: ClientService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const context = Utils.getOrgAndPrjId(state.url);
    console.log('PagesResolve - canActivate', state.url, context);

    return this.clientService.loadProfileRemote(context).toPromise().then(result => {
      if  (result) {
        this._sockService.init();
        this._state.notifyDataChanged(CONSTANT.EVENT_LOADING_COMPLETE, {});
      }

      return true;
    });
  }

}
