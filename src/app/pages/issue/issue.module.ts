import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ToastyModule } from 'ng2-toasty';

import { NgbModalModule, NgbPaginationModule, NgbDropdownModule, NgbDateParserFormatter,
  NgbTabsetModule, NgbButtonsModule, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

import { NgaModule } from '../../theme/nga.module';
import { routing }       from './issue.routing';

import { PipeModule } from '../../pipe/pipe.module';
import { DirectiveModule } from '../../directive/directive.module';
import { SlimLoadingBarModule } from '../../components/ng2-loading-bar';
import { FileUploaderModule } from '../../components/file-uploader';
import { PopDialogModule } from '../../components/pop-dialog';
import { PageInfoModule } from '../../components/page-info';
import { TqlModule } from './tql';
import { IssueInputEditModule } from '../../components/issue-input/issue-input-edit';

import { RouteService } from '../../service/route';
import { RequestService } from '../../service/request';
import { DatetimePickerService } from '../../service/datetime-picker';

import { ClientService } from '../../service/client/client';
import { IssueQueryService } from './query/query.service';
import { IssueService } from '../../service/client/issue';
import { PrivilegeService } from '../../service/privilege';

import { Issue } from './issue.component';
import { IssueQuery } from './query/query.component';
import { IssueTable } from './query/table/table.component';
import { ItemProp } from './query/table/item-prop';
import { TableColumnSelectionModule } from './query/table-column-selection';
import { IssueOptModule } from './query/issue-opt';

import { IssueBrowse } from './query/browse/browse.component';
import { IssueCreate } from './create/create.component';
import { IssueEdit } from './edit/edit.component';
import { IssueView } from './view/view.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    NgaModule,
    routing,

    NgbModalModule, NgbPaginationModule, NgbDropdownModule,
    NgbTabsetModule, NgbButtonsModule, NgbCollapseModule,

    FileUploaderModule,
    PipeModule,
    DirectiveModule,
    ToastyModule,
    SlimLoadingBarModule.forRoot(),
    PopDialogModule,
    PageInfoModule,
    TqlModule,
    IssueOptModule,
    TableColumnSelectionModule,
    IssueInputEditModule,
  ],
  declarations: [
    Issue,
    IssueQuery, IssueTable, ItemProp, IssueBrowse,
    IssueCreate,
    IssueEdit,
    IssueView,
  ],
  providers: [
    RouteService,
    RequestService,
    DatetimePickerService,
    ClientService,
    IssueService, IssueQueryService,
    PrivilegeService,
  ],
})
export class IssueModule {}

