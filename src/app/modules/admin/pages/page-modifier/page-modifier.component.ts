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
        //console.log(this.plantId);

        this.adminService
        .getPlantById(this.plantId)
        .subscribe((plantData: any) => {
          this.editPlant = plantData;
          //console.log(this.editPlant);
          //console.log(this.editPlant.name);
        });
      }
    });

  }



  /** Méthode qui envoie les champs modifiés pour mise à jour **/
  public update(plant: any): void {
    //console.log(plant);
    const nameValue = plant.nameFc;
    const priceValue = plant.priceFc;
    const ratingValue = plant.ratingFc;
    const quantityValue = plant.quantityFc;
    const categoryValue = plant.categoryFc;
    const inStockValue = plant.inStockFc;

    const plante: any = {
      id: this.plantId,
      product_name: nameValue,
      product_price: priceValue,
      product_qty: quantityValue,
      product_rating: ratingValue,
      product_breadcrumb_label: categoryValue,
      product_instock: [inStockValue],
      product_url_picture : "https//picsum.photos/id/18/200/300",
      product_discount_code : "",
      product_color: "",
      product_unitprice_ati: "",
      product_unitprice_tf: "",
      product_discount_tf: "",
      product_discount_ati: "",
      product_url_page: "",
      product_shipping_method: null,
      product_image_source: "",
      product_seller: "market place",
      product_web_only: "non"
    };
    this.adminService.updatePlant(plante)?.subscribe((resp) => {
      this.router.navigate(['admin']);
    });
  }

}
