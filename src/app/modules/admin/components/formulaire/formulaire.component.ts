import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Plant } from '../../models/plant';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss'],
})
export class FormulaireComponent implements OnInit {
  plantForm!: FormGroup;
  @Input() buttonLabel!: string;
  @Input() plantInfos: any;
  @Input() isAdd : boolean = true;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.plantForm = this.formBuilder.group(
      {
        nameFc: new FormControl(this.plantInfos.product_name, [Validators.required]),
        priceFc: new FormControl(this.plantInfos.product_price, [Validators.required]),
        quantityFc: new FormControl(this.plantInfos.product_quantity, [Validators.required]),
        inStockFc: new FormControl(this.plantInfos.product_instock, [Validators.required]),
        categoryFc: new FormControl(this.plantInfos.product_breadcrumb_label, [Validators.required]),
        ratingFc: new FormControl(this.plantInfos.product_rating, [Validators.required]),
      });
  }

  addPlant(){}

  updatePlant(){}
}

