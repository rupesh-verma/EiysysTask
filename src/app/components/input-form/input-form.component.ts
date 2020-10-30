import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss']
})
export class InputFormComponent implements OnInit {
  demoForm: FormGroup;
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.createForm();
  }
  createForm(): void{
    this.demoForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    gender: ['', Validators.required],
    mobile: [''],
    email: ['', Validators.compose([Validators.required, Validators.pattern(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)])],
    accountNo: ['', Validators.required],
    ifscCode: ['', Validators.required],
    note: ['']
    });
  }
  saveFormData(): void {
    this.demoForm.markAllAsTouched();
    if (this.demoForm.valid) {
      console.log(this.demoForm.value);
      this.setFormDataToLocalStorage(this.demoForm.value);
      alert('Data save to localStorage also on "task-form" key');
      this.clearForm();
    }
  }
  clearForm(): void{
    this.demoForm.reset();
  }
  setFormDataToLocalStorage(value): void{
    let previousData = localStorage.getItem('task-form');
    previousData = previousData ? JSON.parse(previousData) : null;
    const tempArray: any[] = [];
    tempArray.push(value);
    if (previousData) {
      tempArray.push(previousData);
    }
    localStorage.setItem('task-form', JSON.stringify(tempArray));
  }
}
