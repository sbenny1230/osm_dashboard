import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
    private modalService: NgbModal,
    private formBuilder: FormBuilder
    ) { }

  public open(modal: any): void {
    this.modalService.open(modal);
  }    

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.ccForm.value)
  }

}
