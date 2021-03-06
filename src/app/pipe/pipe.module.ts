import { NgModule } from '@angular/core';

import { MsgReadPipe } from './msg-read';
import { ImgPathPipe, ThumbPathPipe } from './img-path';
import { MapToArrayPipe } from './map-to-array';
import { DateFormatPipe, TimePassedPipe } from './date';
import { ModelStatusPipe } from './model-status';
import { ExeStatusPipe } from './exe-status';
import { PercentPipe } from './percent';
import { MarkErrorPipe } from './mark-error';
import { ShowIfContainsPipe } from './contains';
import { PathToLinkPipe } from './misc';
import { FieldApplyToPipe, FieldFormatPipe, TrueOrFalsePipe, DisableOrNotPipe, CaseExeStatusPipe }
  from './field-property';
import { PathToNamePipe } from './path-to-name';
import { MyFilterPipe } from './my-filter';
import { IdToNamePipe } from './id-to-name';

import { TermPipe, SectionPipe } from './misc';

@NgModule({
  imports: [],

  declarations: [MsgReadPipe, ExeStatusPipe, PathToNamePipe, ImgPathPipe, ThumbPathPipe, MapToArrayPipe,
    DateFormatPipe, TimePassedPipe,
    ModelStatusPipe, MarkErrorPipe, FieldApplyToPipe, FieldFormatPipe, TrueOrFalsePipe,
    DisableOrNotPipe, CaseExeStatusPipe, PercentPipe, ShowIfContainsPipe, PathToLinkPipe, MyFilterPipe,
    IdToNamePipe, TermPipe, SectionPipe],

  exports: [MsgReadPipe, ExeStatusPipe, PathToNamePipe, ImgPathPipe, ThumbPathPipe, MapToArrayPipe,
    DateFormatPipe, TimePassedPipe,
    ModelStatusPipe, MarkErrorPipe, FieldApplyToPipe, FieldFormatPipe, TrueOrFalsePipe,
    DisableOrNotPipe, CaseExeStatusPipe, PercentPipe, ShowIfContainsPipe, PathToLinkPipe, MyFilterPipe,
    IdToNamePipe, TermPipe, SectionPipe],
})
export class PipeModule {

}

