import { Injectable } from '@angular/core';

@Injectable()
export class GeneralService {

  changeView(viewName){
    console.log(viewName);
  }
}
