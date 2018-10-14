import * as _ from 'lodash';

import { Injectable } from '@angular/core';

import 'rxjs/add/observable/of';

import { Cookie } from 'ng2-cookies/ng2-cookies';

import { CONSTANT } from '../../utils/constant';
import { RouteService } from '../route';
import { RequestService } from '../request';

@Injectable()
export class AccountService {
  constructor(private _reqService: RequestService, private _routeService: RouteService) {
  }

  _login = 'client/account/login';
  _loginWithVcode = 'client/account/loginWithVerifyCode';
  _logout = 'client/account/logout';
  _register = 'client/account/register';
  _changePassword = 'client/account/changePassword';

  _forgotPassword = 'client/account/forgotPassword';
  _checkResetPassword = 'client/account/checkResetPassword';
  _resetPassword = 'client/account/resetPassword';

  login(model: any) {
    const that = this;
    return this._reqService.post(this._login, model).map((json: any) => {
      let errors = undefined;
      if (json.code == 1) {
        const days: number = model.rememberMe ? 30 : 1;

        that.saveTokenLocal(json.token, days);
        that._routeService.navTo('/pages/org/' + json.profile.defaultOrgId + '/prjs');
      } else {
        errors = json.msg;
      }
      return errors;
    });
  }
  loginWithVcode(vcode: string) {
    const that = this;
    return this._reqService.post(this._loginWithVcode, { vcode: vcode }).map((json: any) => {
      let errors = undefined;
      if (json.code == 1) {
        const days: number = 1;

        that.saveTokenLocal(json.token, days);
        that._routeService.navTo('/pages/org/' + json.profile.defaultOrgId + '/prjs');
      } else {
        errors = json.msg;
      }
      return errors;
    });
  }
  register(model: any) {
    const that = this;
    return this._reqService.post(this._register, model).map((json: any) => {
      if (json.code == 1) {
        that.saveTokenLocal(json.token, 1);
      }
      return json;
    });
  }

  resetPassword(vcode: string, model: number) {
    _.merge(model, { vcode: vcode });
    return this._reqService.post(this._resetPassword, model).map((json: any) => {
      let error = undefined;
      if (json.code == 1) {
        this.saveTokenLocal(json.token, 1);

        this._routeService.navTo('/pages/dashboard');
      } else {
        error = json.msg;
      }
      return error;
    });
  }

  checkResetPassword(vcode: string) {
    return this._reqService.post(this._checkResetPassword, { vcode: vcode });
  }

  logout() {
    this._reqService.post(this._logout, {}).subscribe((json: any) => {
      // if (json.code == 1) {
        Cookie.delete(CONSTANT.TOKEN_KEY);
        // CONSTANT.PROFILE = null;
        this._routeService.navTo('/login');
      // }
    });
  }

  forgotPassword(email: number) {
    return this._reqService.post(this._forgotPassword, { email: email });
  }

  changePassword(model: any) {
    return this._reqService.post(this._changePassword, model);
  }

  saveTokenLocal(token: any, expireDays: number) {
    const that = this;
    CONSTANT.TOKEN = token;

    if (!expireDays) {
      expireDays = parseInt(Cookie.get(CONSTANT.TOKEN_EXPIRE));
    } else {
      Cookie.set(CONSTANT.TOKEN_EXPIRE, expireDays + '', 365);
    }

    Cookie.set(CONSTANT.TOKEN_KEY, JSON.stringify(token), expireDays);
  }

}