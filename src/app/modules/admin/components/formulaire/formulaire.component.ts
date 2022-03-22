import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Plant } from '../../models/plant';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss'],
})
export class FormulaireComponent implements OnInit {
  plantForm!: FormGroup;
  @Input()buttonLabel!:String;
  @Input() plantInfos!: Plant;
  @Output() submitted = new EventEmitter();

  constructor(private fb : FormBuilder) {
  }

  ngOnInit(): void {
    console.log(this.plantInfos);
    this.plantForm = this.fb.group({
      nameFc: new FormControl(this.plantInfos.name, [Validators.required]),
      priceFc: new FormControl(this.plantInfos.price, [Validators.required]),
      quantityFc: new FormControl(this.plantInfos.quantity, [Validators.required]),
      inStockFc: new FormControl(this.plantInfos.inStock, [Validators.required]),
      categoryFc: new FormControl(this.plantInfos.category, [Validators.required]),
      ratingFc: new FormControl(this.plantInfos.rating, [Validators.required]),
    });
  }

  onSubmit(){
    this.submitted.emit(this.plantForm.value)
  }

}

