import { Component, ElementRef, HostListener, Input, OnInit, AfterViewInit, OnDestroy} from '@angular/core';
import { GlobalState } from '../../../global.state';
import { layoutSizes } from '../../../theme';

import { CONSTANT } from '../../../utils/constant';
import { WS_CONSTANT } from '../../../utils/ws-constant';

declare var jQuery;

@Component({
  selector: 'ba-sidebar',
  templateUrl: './baSidebar.html',
  styleUrls: ['./baSidebar.scss'],
})
export class BaSidebar implements OnInit, AfterViewInit, OnDestroy {
  eventCode: string = 'BaSidebar';

  isOrgAdmin: boolean;
  public menuHeight: number;
  public isMenuCollapsed: boolean = false;
  public isMenuShouldCollapsed: boolean = false;

  constructor(private _elementRef: ElementRef, private _state: GlobalState) {
    this._state.subscribe('menu.isCollapsed', this.eventCode, (isCollapsed) => {
      this.isMenuCollapsed = isCollapsed;
    });

    if (CONSTANT.PROFILE) {
      this.isOrgAdmin = CONSTANT.ORG_PRIVILEGES['org-admin'];
    }
  }

  public ngOnInit(): void {
    if (this._shouldMenuCollapse()) {
      this.menuCollapse();
    }
  }

  public ngAfterViewInit(): void {
    setTimeout(() => {
      this.updateSidebarHeight();
    });
  }

  @HostListener('window:resize')
  public onWindowResize(): void {

    const isMenuShouldCollapsed = this._shouldMenuCollapse();

    if (this.isMenuShouldCollapsed !== isMenuShouldCollapsed) {
      this.menuCollapseStateChange(isMenuShouldCollapsed);
    }
    this.isMenuShouldCollapsed = isMenuShouldCollapsed;
    this.updateSidebarHeight();
  }

  public menuExpand(): void {
    this.menuCollapseStateChange(false);
  }

  public menuCollapse(): void {
    this.menuCollapseStateChange(true);
  }

  public menuCollapseStateChange(isCollapsed: boolean): void {
    this.isMenuCollapsed = isCollapsed;
    this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
  }

  public updateSidebarHeight(): void {
    // TODO: get rid of magic 84 constant
    this.menuHeight = this._elementRef.nativeElement.childNodes[0].clientHeight - 84;
  }

  private _shouldMenuCollapse(): boolean {
    return window.innerWidth <= layoutSizes.resWidthCollapseSidebar;
  }

  ngOnDestroy(): void {
    this._state.unsubscribe(WS_CONSTANT.WS_ORG_SETTINGS, this.eventCode);
  }
}
