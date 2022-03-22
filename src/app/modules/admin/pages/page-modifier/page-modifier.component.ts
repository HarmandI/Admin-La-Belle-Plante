import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup} from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Plant } from '../../models/plant';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-page-modifier',
  templateUrl: './page-modifier.component.html',
  styleUrls: ['./page-modifier.component.scss']
})
export class PageModifierComponent implements OnInit {
  editPlant!: Plant;
  plantId!: string;



  constructor(private adminService: AdminService,
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    /** Pour récuperer l'id de la plante à modifier et appel Api**/
    this.route.paramMap.subscribe((params : ParamMap) => {
      const id = params.get('id')
      if( id != null){
        this.plantId = id;
        console.log(this.plantId);

        this.adminService
        .getPlantById(this.plantId)
        .subscribe((plantData: any) => {
          this.editPlant = plantData;
          console.log(this.editPlant);
          console.log(this.editPlant.name);
        });
      }
    });

  }



  /** Méthode qui envoie les champs modifiés pour mise à jour **/
  public update(event: any): void {
    console.log(event);
    // const nameValue = this.updatePlantForm.value['nameFc'];
    // const priceValue = this.updatePlantForm.value['priceFc'];
    // const ratingValue = this.updatePlantForm.value['ratingFc'];
    // const quantityValue = this.updatePlantForm.value['quantityFc'];
    // const categoryValue = this.updatePlantForm.value['categoryFc'];
    // const inStockValue = this.updatePlantForm.value['inStockFc'];
    // const urlPicture = "https//picsum.photos/id/18/200/300";

    // const plant: Plant = {
    //   id: this.plantId,
    //   name: nameValue,
    //   price: priceValue,
    //   quantity: quantityValue,
    //   rating: ratingValue,
    //   category: categoryValue,
    //   inStock: [inStockValue],
    //   urlPicture
    // };
    // this.adminService.updatePlant(plant)?.subscribe((resp) => {
    //   this.router.navigate(['admin']);
    // });
  }

}
