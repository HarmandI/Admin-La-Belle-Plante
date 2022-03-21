import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Plant } from '../../models/plant';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-page-tableau',
  templateUrl: './page-tableau.component.html',
  styleUrls: ['./page-tableau.component.scss']
})
export class PageTableauComponent implements OnInit {
  public listData!: any[];
  public subCollection$: Subject<Plant[]>;

  constructor(private adminService: AdminService) {
    this.subCollection$ = this.adminService.subCollection$;
    this.adminService.refreshCollection();

    this.adminService.subCollection$.subscribe((data: Plant[]) => console.log("après mapping", data))
  }

  ngOnInit(): void {
    // this.listData = [];
    // this.adminService.getData().subscribe(
    //   (listPlant: any[]) => {
    //     this.listData = listPlant;
    //     this.listData.length = 9;
    //   })
  }

  onClickDelete(id: number){
    console.log(id);

  }

}
