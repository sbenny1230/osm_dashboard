import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-creatinine-calculator',
  templateUrl: './creatinine-calculator.component.html',
  styleUrls: ['./creatinine-calculator.component.css']
})
export class CreatinineCalculatorComponent implements OnInit {

  ccForm = this.formBuilder.group({
    age: '',
    weight: '',
    creatinine: ''
  });

  constructor(
    private formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.ccForm.value)
  }

}
