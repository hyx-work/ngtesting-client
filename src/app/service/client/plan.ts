import * as _ from 'lodash';

import { Injectable } from '@angular/core';

import { CONSTANT } from '../../utils/constant';
import { Utils } from '../../utils/utils';
import { RequestService } from '../request';

@Injectable()
export class PlanService {
  constructor(private _reqService: RequestService) {
  }

  _apiBase = 'client/plan/';

  query(query: any, page: number, pageSize: number) {
    _.merge(query, { page: page, pageSize: pageSize });
    return this._reqService.post(this._apiBase + 'query', query);
  }

  get(id: number) {
    const data = { id: id };
    return this._reqService.post(this._apiBase + 'get', data);
  }

  save(model: any) {
    const data = _.clone(model);

    data.tasks = null;
    return this._reqService.post(this._apiBase + 'save', data);
  }

  delete(id: number) {
    const model = { id: id };
    return this._reqService.post(this._apiBase + 'delete', model);
  }
}

