import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-custom-pagination',
  templateUrl: './custom-pagination.component.html',
  styleUrls: ['./custom-pagination.component.scss']
})
export class CustomPaginationComponent implements OnInit, OnChanges {
  @Input('totalRecords') totalRecords: any;
  @Input('recordsPerPage') recordsPerPage: any;
  @Output('loadPage') loadPage = new EventEmitter();
  @Input('activePageNo') activePageNo: any;
  pagesCount: any;
  pagesArray = [];
  currentPageRange: any;
  currentPage = 0;

  constructor() { }

  ngOnInit() {
    console.log(this.activePageNo);
    this.currentPage = this.activePageNo;
    // console.log(this.activePageNo);
    // console.log(this.currentPage);
    this.buildPagination();
  }

  ngOnChanges() {
    this.currentPage = this.activePageNo;
    // console.log(this.activePageNo);
    // console.log(this.currentPage);
    this.buildPagination();
  }

  buildPagination() {
    this.pagesCount = Math.ceil(this.totalRecords / this.recordsPerPage);
    this.pagesArray = [];
    for (let i = 0; i < this.pagesCount; i++) {
      this.pagesArray.push(i);
    }
    this.setPageRange();
  }

  setPageRange() {
    const pageStart = (this.currentPage * parseInt(this.recordsPerPage)) + 1;
    let pageEnd = pageStart + (this.recordsPerPage - 1); // (this.currentPage + 1) * parseInt(this.recordsPerPage);
    pageEnd = pageEnd > this.totalRecords ? this.totalRecords : pageEnd;
    this.currentPageRange = pageStart + '-' + pageEnd;
  }

  onloadPage(pageNo) {
    this.loadPage.emit(pageNo);
    this.currentPage = pageNo;
    this.setPageRange();
  }

  pageChange(type = 'next') {
    if (type == 'next') {
      if (this.currentPage == (this.pagesCount - 1)) {
        return false;
      }
      this.currentPage++;
    } else {
      if (this.currentPage == 0) {
        return false;
      }
      this.currentPage--;
    }
    this.loadPage.emit(this.currentPage);
    this.setPageRange();
  }

}
