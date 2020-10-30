import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-test-diretive',
  templateUrl: './test-diretive.component.html',
  styleUrls: ['./test-diretive.component.scss']
})
export class TestDiretiveComponent implements OnInit {
  testDirForm: FormGroup;
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.testDirForm = this.fb.group({
      name: ['']
    });
  }

}
