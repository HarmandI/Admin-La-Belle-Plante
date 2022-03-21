import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss'],
})
export class FormulaireComponent implements OnInit {
  plantForm!: FormGroup;
  @Input()buttonLabel!:String;
  constructor(private fb : FormBuilder) {
    this.plantForm = this.fb.group({});
  }

  ngOnInit(): void {}

  onSubmit(){}
}

