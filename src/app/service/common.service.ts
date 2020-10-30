import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { Branches } from '../components/model/branches';
import { NgxSpinnerService } from 'ngx-spinner';
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(
    private httpClient: HttpClient,
    private spinner: NgxSpinnerService
  ) { }
  geAlltBranch(city: any): Observable<Branches[]> {
    return this.httpClient.get<Branches[]>('https://vast-shore-74260.herokuapp.com/banks?city=' + city);
  }
  showLoader() {
    this.spinner.show();
  }
  hideLoader() {
    this.spinner.hide();
  }
}
