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
  public newplant = new Plant();


  constructor(private fb: FormBuilder, private router: Router, private adminService: AdminService) {

  }

  ngOnInit(): void {

  }

  public addPlant(plant: any): void {
    const nameValue = plant.nameFc;
    const priceValue = plant.priceFc;
    const ratingValue = plant.ratingFc;
    const quantityValue = plant.quantityFc;
    const categoryValue = plant.categoryFc;
    const inStockValue = plant.inStockFc;

    const plante: any = {
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

    this.adminService.addPlant(plante)?.subscribe((resp)=>{
    })
    this.router.navigate(['admin']);
  }
}
