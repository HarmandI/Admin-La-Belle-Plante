import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { FormulaireComponent } from '../../components/formulaire/formulaire.component';
import { Plant } from '../../models/plant';
import { AdminService } from '../../services/admin.service';




@Component({
  selector: 'app-page-ajouter',
  templateUrl: './page-ajouter.component.html',
  styleUrls: ['./page-ajouter.component.scss'],
})
export class PageAjouterComponent implements OnInit {
  public plantForm: FormGroup;
  public isAdd: boolean = false;


  constructor(private fb: FormBuilder, private router: Router, private adminService: AdminService) {
    this.plantForm = new FormGroup({});
    this.isAdd = false;
  }

  ngOnInit(): void {

  }

  public onSubmit(): void {
    const nameValue = this.plantForm.value['nameFC'];
    const priceValue = this.plantForm.value['priceFc'];
    const quantityValue = this.plantForm.value['quantityFc'];
    const inStockValue = this.plantForm.value['inStockFC'];
    const categoryValue = this.plantForm.value['categotyFC'];
    const urlPicture: string = 'https//picsum.photos/id/18/200/300';
    const ratingValue = this.plantForm.value['ratingFc'];
    const idValue = this.plantForm.value[''];

    const plant : Plant = {
      name: nameValue,
      price: priceValue,
      quantity: quantityValue,
      inStock: [inStockValue],
      category: [categoryValue],
      urlPicture: 'https//picsum.photos/id/18/200/300',
      rating: ratingValue,
      id: idValue,
    };
    console.log("coco",plant);

    this.adminService.addPlant(plant)?.subscribe((resp)=>{
    })
    this.router.navigate(['admin']);
  }
}
