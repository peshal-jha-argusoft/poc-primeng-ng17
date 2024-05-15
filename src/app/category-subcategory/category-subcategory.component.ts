import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { SharedModule } from '../shared/shared';
import { CommonModule } from '@angular/common';
interface Column {
    field: string;
    header: string;
}
@Component({
  selector: 'app-category-subcategory',
  standalone: true,
  imports: [
    SharedModule,
    CommonModule
  ],
  templateUrl: './category-subcategory.component.html',
  styleUrl: './category-subcategory.component.scss'
})
export class CategorySubcategoryComponent {
  files!: TreeNode[];

  cols!: Column[];

  filterMode = 'lenient';

    filterModes = [
        { label: 'Lenient', value: 'lenient' },
        { label: 'Strict', value: 'strict' }
    ];



  ngOnInit() {
      this.files = [];
      for(let i = 0; i < 50; i++) {
          let node = {
              data:{  
                  name: 'Item ' + i,
                  size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                  type: 'Type ' + i
              },
              children: [
                  {
                      data: {  
                          name: 'Item ' + i + ' - 0',
                          size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                          type: 'Type ' + i
                      }
                  }
              ]
          };

          this.files.push(node);
      }

      this.cols = [
          { field: 'name', header: 'Name' },
          { field: 'size', header: 'Size' },
          { field: 'type', header: 'Type' }
      ];
  }
}
