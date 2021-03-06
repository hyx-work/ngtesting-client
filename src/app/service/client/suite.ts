import * as _ from 'lodash';

import { Injectable } from '@angular/core';

import { CONSTANT } from '../../utils/constant';
import { RequestService } from '../request';

@Injectable()
export class SuiteService {
  constructor(private _reqService: RequestService) {
  }

  _apiBase = 'client/suite/';

  query(query: any, page: number, pageSize: number) {
    _.merge(query, { page: page, pageSize: pageSize });
    return this._reqService.post(this._apiBase + 'query', query);
  }

  get(id: number) {
    const model = { id: id };
    return this._reqService.post(this._apiBase + 'get', model);
  }

  save(caseProjectId: number, model: any) {
    const data = _.clone(model);
    data.caseProjectId = caseProjectId;
    return this._reqService.post(this._apiBase + 'save', data);
  }

  saveSuiteCases(caseProjectId: number, suiteId: number, cases: any[]) {
    const ids: number[] = cases.map(function (item, index, input) {
      return item.id;
    });
    return this._reqService.post(this._apiBase + 'saveCases', { caseProjectId: caseProjectId, suiteId: suiteId, cases: ids });
  }

  delete(id: any) {
    const model = { id: id };
    return this._reqService.post(this._apiBase + 'delete', model);
  }
  close(id: any) {
    const model = { id: id };
    return this._reqService.post(this._apiBase + 'close', model);
  }

  markAllRead(ids: number[]) {
    return this._reqService.post(this._apiBase + 'markAllRead', { ids: ids });
  }
}

