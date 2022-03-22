import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Plant } from '../../models/plant';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-page-modifier',
  templateUrl: './page-modifier.component.html',
  styleUrls: ['./page-modifier.component.scss']
})
export class PageModifierComponent implements OnInit {
  plantForm: FormGroup;
  updatePlantForm: FormGroup;
  plantInfos: any;
  plantId: any;



  constructor(private adminService: AdminService,
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute) {
    this.updatePlantForm = new FormGroup({});
    this.plantForm = this.initForm();
  }

  ngOnInit(): void {
    /** Pour récuperer l'id de la plante à modifier **/
    this.plantId = this.route.snapshot.paramMap.get('id');

    /** Appel Api **/
    this.adminService
      .getPlantById(this.plantId)
      .subscribe((plantInfos: any) => {
        this.plantInfos = plantInfos;
        console.log(this.plantInfos);
        console.log(this.plantInfos.product_name);
      });
  }

  /** Méthode qui initialise les champs du formulaire avec les infos du db Json **/
  private initForm(plant?: Plant): FormGroup {

    return this.fb.group({
      nom:[plant ? plant.name : ''],
      price: [plant ? plant.price : ''],
      quantity: [plant ? plant.quantity : ''],
      category: [plant ? plant.category : ''],
      rating: [plant ? plant.rating : ''],
      inStock: [plant ? plant.inStock : ['']],
    });
  }


  /** Méthode qui envoie les champs modifiés pour mise à jour **/
  public onSubmit(): void {
    const nameValue = this.updatePlantForm.value['nameFc'];
    const priceValue = this.updatePlantForm.value['priceFc'];
    const ratingValue = this.updatePlantForm.value['ratingFc'];
    const quantityValue = this.updatePlantForm.value['quantityFc'];
    const categoryValue = this.updatePlantForm.value['categoryFc'];
    const inStockValue = this.updatePlantForm.value['inStockFc'];
    const urlPicture = "https//picsum.photos/id/18/200/300";

    const plant: Plant = {
      id: this.plantId,
      name: nameValue,
      price: priceValue,
      quantity: quantityValue,
      rating: ratingValue,
      category: categoryValue,
      inStock: [inStockValue],
      urlPicture
    };
    this.adminService.updatePlant(plant)?.subscribe((resp) => {
      this.router.navigate(['admin']);
    });
  }

}
