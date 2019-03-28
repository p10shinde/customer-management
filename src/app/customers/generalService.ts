import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class GeneralService {

  private viewChangedUpdated = new Subject<string>();

  changeView(viewName) {
    this.viewChangedUpdated.next(viewName);
  }

  getViewUpdatedListener() {
    return this.viewChangedUpdated.asObservable();
  }
}
