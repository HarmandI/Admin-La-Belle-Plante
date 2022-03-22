import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  @Input() plantInfos!: Plant;
  @Input()buttonLabel!:String;
  @Output()submitted= new EventEmitter<Plant>();
  constructor(private fb : FormBuilder, private adminService: AdminService) {

  }

  ngOnInit(): void {
    this.plantForm = this.fb.group({
      nameFc: new FormControl(this.plantInfos.name, [Validators.required]),
      priceFc: new FormControl(this.plantInfos.price, [Validators.required]),
      quantityFc: new FormControl(this.plantInfos.quantity, [Validators.required]),
      inStockFc: new FormControl(this.plantInfos.inStock, [Validators.required]),
      categoryFc: new FormControl(this.plantInfos.category, [Validators.required]),
      ratingFc: new FormControl(this.plantInfos.rating, [Validators.required]),
    });
  }

  public onSubmit(): void {
    this.submitted.emit(this.plantForm.value);
  }
}

function newEventEmitter() {
  throw new Error('Function not implemented.');
}

