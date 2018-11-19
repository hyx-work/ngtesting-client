import { Component, ViewEncapsulation, ViewChild, QueryList, Query } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgModule, Pipe, OnInit, AfterViewInit }      from '@angular/core';

import { GlobalState } from '../../../../global.state';

import { CONSTANT, VARI, Utils } from '../../../../utils';
import { ValidatorUtils } from '../../../../validator/validator.utils';
import { RouteService } from '../../../../service/route';

import { PopDialogComponent } from '../../../../components/pop-dialog';

import { ModuleService } from '../../../../service/client/module';

declare var jQuery;

@Component({
  selector: 'module-edit',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./edit.scss'],
  templateUrl: './edit.html',
})
export class ProjectModuleEdit implements OnInit, AfterViewInit {
  orgId: number;
  projectId: number;
  id: number;

  form: FormGroup;

  model: any = {};

  @ViewChild('modalWrapper') modalWrapper: PopDialogComponent;

  constructor(private _state: GlobalState, private _routeService: RouteService, private _route: ActivatedRoute,
              private fb: FormBuilder, private _moduleService: ModuleService) {
    const that = this;
    this.orgId = CONSTANT.CURR_ORG_ID;

    this._route.params.forEach(params => {
      that.projectId = +params['id'];
      that.id = +params['vid'];
    });

    this.loadData();

    that.buildForm();
  }
  ngOnInit() {

  }
  ngAfterViewInit() {}

  buildForm(): void {
    this.form = this.fb.group(
      {
        'name': ['', [Validators.required]],
        'descr': ['', []],
        'disabled': ['', []],
      }, {},
    );

    this.form.valueChanges.debounceTime(500).subscribe(data => this.onValueChanged(data));
    this.onValueChanged();
  }
  onValueChanged(data?: any) {
    this.formErrors = ValidatorUtils.genMsg(this.form, this.validateMsg, []);
  }

  formErrors = [];
  validateMsg = {
    'name': {
      'required': '名称不能为空',
    },
  };

  loadData() {
    if (!this.id) {
      this.model = { projectId: this.projectId, disabled: false };
      return;
    }

    this._moduleService.get(this.id).subscribe((json: any) => {
      this.model = json.data;
    });
  }

  save() {
    this._moduleService.save(this.model).subscribe((json: any) => {
      if (json.code == 1) {
        this.gotoList();
      } else {
        this.formErrors = ['保存失败'];
      }
    });
  }

  delete() {
    this._moduleService.delete(this.model.id).subscribe((json: any) => {
      if (json.code == 1) {
        this.modalWrapper.closeModal();
        this.gotoList();
      } else {
        this.formErrors = ['删除失败'];
      }
    });
  }

  gotoList() {
    const uri = '/pages/org/' + CONSTANT.CURR_ORG_ID + '/prjs/' + this.projectId + '/edit/module/list';
    this._routeService.navTo(uri);
  }

  showModal(): void {
    this.modalWrapper.showModal();
  }

}

