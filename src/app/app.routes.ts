import { Routes } from '@angular/router';
import { CategorySubcategoryComponent } from './category-subcategory/category-subcategory.component';
import { CategoryTableComponent } from './category-table/category-table.component';
import { TabParentComponent } from './tab-parent/tab-parent.component';

export const routes: Routes = [

    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full' // Specify pathMatch as 'full'

    },
    {
        path: 'dashboard',
        component: CategorySubcategoryComponent
    },
    {
        path: 'table',
        component: CategoryTableComponent
    },
    {
        path: 'tabs',
        component: TabParentComponent   
    }
];
