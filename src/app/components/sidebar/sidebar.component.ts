import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  category: any;
  curCategory;
  constructor(private sharedService: SharedService) {
   }

  ngOnInit(): void {
    this.sharedService.categoryObserver.subscribe(res => this.curCategory = res)
  }

  selectCategory(category: any) {
    this.category = category;
    this.sharedService.setCategory(this.category)
  } 
}
