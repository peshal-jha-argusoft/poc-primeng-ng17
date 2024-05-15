import { Component } from '@angular/core';
import { TabViewModule } from 'primeng/tabview';
import { CategoryTableComponent } from '../category-table/category-table.component';
import { CategorySubcategoryComponent } from '../category-subcategory/category-subcategory.component';

@Component({
  selector: 'app-tab-parent',
  standalone: true,
  imports: [TabViewModule, CategoryTableComponent, CategorySubcategoryComponent],
  templateUrl: './tab-parent.component.html',
  styleUrl: './tab-parent.component.scss'
})
export class TabParentComponent {

}
