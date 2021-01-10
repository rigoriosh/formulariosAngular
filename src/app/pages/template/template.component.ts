import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  usuario = {
    name: ''
  };
  constructor() { }

  ngOnInit(): void {
  }

  guardar(miForm: NgForm): void{
    console.log('guardando');
    console.log(miForm);
    console.log(miForm.value)
  }

}
