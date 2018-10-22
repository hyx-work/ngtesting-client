import { Component, ViewEncapsulation, NgModule, Pipe, OnInit, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import { ToastyService, ToastyConfig, ToastOptions, ToastData } from 'ng2-toasty';

import { GlobalState } from '../../../global.state';

import { CONSTANT } from '../../../utils/constant';
import { ValidatorUtils } from '../../../validator/validator.utils';

import { RouteService } from '../../../service/route';
import { IssueService } from '../../../service/client/issue';

import { PrivilegeService } from '../../../service/privilege';
import { PopDialogComponent } from '../../../components/pop-dialog';

declare var jQuery;

@Component({
  selector: 'issue-edit',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./edit.scss'],
  templateUrl: './edit.html',
})
export class IssueEdit implements OnInit, AfterViewInit, OnDestroy {
  eventCode: string = 'IssueEdit';
  orgId: number;
  prjId: number;

  id: number;
  model: any = { };

  priorities: any[] = [];
  types: any[] = [];
  prioritie: any[] = [];
  statuses: any[] = [];
  resolutions: any[] = [];
  fields: any[] = [];

  form: any;

  canEdit: boolean;
  @ViewChild('modalWrapper') modalWrapper: PopDialogComponent;

  constructor(private _routeService: RouteService, private _state: GlobalState,
              private fb: FormBuilder, private toastyService: ToastyService,
              private issueService: IssueService, private privilegeService: PrivilegeService) {

  }
  ngOnInit() {
    this.canEdit = this.privilegeService.hasPrivilege('issue-update');
    this.orgId = CONSTANT.CURR_ORG_ID;
    this.prjId = CONSTANT.CURR_PRJ_ID;

    this.buildForm();
  }
  ngAfterViewInit() {}

  buildForm(): void {
    this.form = this.fb.group(
      {
        'name': ['', [Validators.required]],
      }, {},
    );

    this.form.valueChanges.debounceTime(CONSTANT.DebounceTime).subscribe(data => this.onValueChanged(data));
    this.onValueChanged();
  }
  onValueChanged(data?: any) {
    const that = this;
    that.formErrors = ValidatorUtils.genMsg(that.form, that.validateMsg, []);

    if (this.model.testType == 'asrLite') {
      this.model.productBranch = '';
      this.model.asrLangModel = 'comm';
    } else {
      this.model.asrLangModel = '';
    }

    if (this.model.testType == 'nlu-sent') {
      this.model.testsetId = '';
    } else {
      this.model.isFuse = '';
    }

  }

  formErrors = [];
  validateMsg = {
    'name': {
      'required': '名称不能为空',
    },
  };

  loadData() {
    this.issueService.get(this.id).subscribe((json: any) => {
      this.model = json.data;

      // this.caseTypes = CONSTANT.CASE_TYPES_FOR_PROJECT;
      // this.casePriorities = CONSTANT.CASE_PRIORITIES_FOR_PROJECT;
      // this.fields = CONSTANT.CUSTOM_FIELD_FOR_PROJECT;
    });
  }

  save() {
    this.issueService.save(this.prjId, this.model).subscribe((json: any) => {
      if (json.code == 1) {
        this.model = json.data;
        this._state.notifyDataChanged(CONSTANT.EVENT_CASE_UPDATE, { node: this.model, random: Math.random() });

        const toastOptions: ToastOptions = {
          title: '保存成功',
          timeout: 2000,
        };
        this.toastyService.success(toastOptions);
      }
    });
  }

  back() {
    const url = '/pages/org/' + this.orgId + '/prj/' + this.prjId + '/issue/query/'
       + CONSTANT.ISSUE_JQL;
    console.log(url);
    this._routeService.navTo(url);
  }

  delete() {

  }

  showModal(): void {
    this.modalWrapper.showModal();
  }

  ngOnDestroy(): void {
    this._state.unsubscribe(CONSTANT.EVENT_CASE_EDIT, this.eventCode);
  }

}

