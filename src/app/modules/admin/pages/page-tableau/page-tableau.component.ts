import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-page-tableau',
  templateUrl: './page-tableau.component.html',
  styleUrls: ['./page-tableau.component.scss']
})
export class PageTableauComponent implements OnInit {
  public listData!: any[];
  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.listData = [];
    this.adminService.getData().subscribe(
      (listPlant: any[]) => {
        this.listData = listPlant;
        this.listData.length = 9;
      })
  }

  onClickDelete(id: number){
    console.log(id);

  }

}
