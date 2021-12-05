import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ProductListComponent } from './product-list/product-list.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    ProductListComponent,
    SidebarComponent,
    HeaderComponent
  ],
  imports: [CommonModule],
  exports: [
    ProductListComponent,
    SidebarComponent,
    HeaderComponent
  ],
})
export class ComponentsModule {}
