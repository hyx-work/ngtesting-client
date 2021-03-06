import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { PipeModule } from '../../pipe/pipe.module';

import { CommentsService } from '../../service/client/comments';
import { CommentListComponent } from './comment-list/src/comment-list.component';
import { CommentEditComponent } from './comment-edit/src/comment-edit.component';

export * from './comment-list/src/comment-list.component';
export * from './comment-edit/src/comment-edit.component';

@NgModule({
  imports: [CommonModule, RouterModule, FormsModule, PipeModule],
  declarations: [CommentListComponent, CommentEditComponent],
  exports: [CommentListComponent, CommentEditComponent],
  providers: [CommentsService],
})
export class CommentsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CommentsModule,
      providers: [CommentsService],
    };
  }
}
