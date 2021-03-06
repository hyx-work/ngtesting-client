import * as _ from 'lodash';

import { Injectable } from '@angular/core';

import { CONSTANT } from '../../utils/constant';
import { RequestService } from '../request';

@Injectable()
export class CaseService {
  constructor(private _reqService: RequestService) {
  }

  _apiBase = 'client/case/';

  query() {
    return this._reqService.post(this._apiBase + 'query', {});
  }

  queryForSuiteSelection(caseProjectId: number, suiteId: number) {
    return this._reqService.post(this._apiBase + 'queryForSuiteSelection',
      { caseProjectId: caseProjectId, suiteId: suiteId });
  }
  queryForTaskSelection(caseProjectId: number, taskId: number) {
    return this._reqService.post(this._apiBase + 'queryForTaskSelection',
      { caseProjectId: caseProjectId , taskId: taskId });
  }

  get(id: number) {
    return this._reqService.post(this._apiBase + 'get', { id: id }).map(json => {
      this.toFlat(json.data);
      return json;
    });
  }

  rename(model: any) {
    return this._reqService.post(this._apiBase + 'rename', model);
  }
  update(model: any) {
    const data = _.clone(model);
    _.unset(data, 'steps');
    _.unset(data, 'comments');
    _.unset(data, 'attachments');
    _.unset(data, 'histories');

    return this._reqService.post(this._apiBase + 'update', data).map(json => {
      this.toFlat(json.data);
      return json;
    });
  }
  move(data: any) {
    return this._reqService.post(this._apiBase + 'move', data);
  }
  delete(id: any) {
    return this._reqService.post(this._apiBase + 'delete', { id: id });
  }

  saveFieldWithOtherProject(id: number, caseProjectId: number, field: any) {
    const model = _.merge(field, { id: id, caseProjectId: caseProjectId });
    return this._reqService.post(this._apiBase + 'saveField', model);
  }
  saveField(id: number, field: any) {
    return this.saveFieldWithOtherProject(id, null, field);
  }

  changeContentType(contentType: string, id: number) {
    return this._reqService.post(this._apiBase + 'changeContentType', { id: id, contentType: contentType });
  }

  reviewResult(id: number, result: boolean, nextId: number) {
    return this._reqService.post(this._apiBase + 'reviewResult',
      { id: id, result: result, nextId: nextId });
  }

  exportAll() {
    return this._reqService.post(this._apiBase + 'exportAll', {});
  }

  toFlat(model) {
    _.merge(model, model.jsonProp);
    model.jsonProp = null;

    // console.log('===', model);
  }

}
