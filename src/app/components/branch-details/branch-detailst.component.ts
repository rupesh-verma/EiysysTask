import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CommonService } from 'src/app/service/common.service';
import { Branches, BranchesMaker } from '../model/branches';

@Component({
  selector: 'app-branch-detailst',
  templateUrl: './branch-detailst.component.html',
  styleUrls: ['./branch-detailst.component.scss']
})
export class BranchDetailstComponent implements OnInit {
  branchList: Branches[] = [];
  currentPageBranchList: Branches[] = [];
  branchDetails: Branches;
  ddlOptions: any[];
  selectedBranch: string;
  currentPageIndex: any;
  recordsPerPage: any;
  totalBranchCount: any;

  filterKeys: any;
  filterList: any[];
  constructor(
    private commonService: CommonService,
    public dialog: MatDialog
  ) {
    this.ddlOptions = ['Delhi', 'Mumbai', 'Gurgaon', 'Pune'];
    this.selectedBranch = 'Delhi';
    this.currentPageIndex = 0;
    this.recordsPerPage = 10;
    this.totalBranchCount = 0;
    this.filterKeys = '';
    this.filterList = ['address', 'branch', 'city'];
  }

  ngOnInit(): void {
    this.getTableData();
  }
  getTableData() {
    this.commonService.showLoader();
    this.commonService.geAlltBranch(this.selectedBranch.toLocaleUpperCase()).subscribe(res => {
      this.branchList = res.map(e => BranchesMaker.castInto(e));
      this.totalBranchCount = this.branchList.length;
      this.getNewPage();
      this.commonService.hideLoader();
    });
    // console.log(this.filterKeys)
  }
  changeBranchHandler(value): void{
    console.log(value);
    this.selectedBranch = value;
    this.getTableData();
  }
  loadPageData(pageNo) {
    this.currentPageIndex = pageNo;
    this.getNewPage();
  }
  getNewPage() {
    const start = this.currentPageIndex * 10 ;
    const end = this.currentPageIndex * 10 + 10;
    this.currentPageBranchList = this.branchList.slice(start, end);
  }
  showDescription(branch, template): void{
    this.branchDetails = branch;
    this.dialog.open(template, {
      width: '600px',
    });
  }
}
