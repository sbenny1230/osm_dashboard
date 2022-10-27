import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creatinine-calculator',
  templateUrl: './creatinine-calculator.component.html',
  styleUrls: ['./creatinine-calculator.component.css']
})

export class CreatinineCalculatorComponent implements OnInit {
  weight = 0;
  creatinine = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
  }
}
