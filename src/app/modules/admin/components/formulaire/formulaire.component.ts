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
  @Input() plantInfos!: any;
  @Output() submitted = new EventEmitter();

  constructor(private fb : FormBuilder) {
  }

  ngOnInit(): void {
    console.log(this.plantInfos);
    this.plantForm = this.fb.group({
      nameFc: new FormControl(this.plantInfos.product_name, [Validators.required]),
      priceFc: new FormControl(this.plantInfos.product_price, [Validators.required]),
      quantityFc: new FormControl(this.plantInfos.product_qty, [Validators.required]),
      inStockFc: new FormControl(this.plantInfos.product_instock, [Validators.required]),
      categoryFc: new FormControl(this.plantInfos.product_breadcrumb_label, [Validators.required]),
      ratingFc: new FormControl(this.plantInfos.product_rating, [Validators.required]),
    });
  }

  onSubmit(){
    this.submitted.emit(this.plantForm.value)
  }

}

