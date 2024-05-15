import { Component } from '@angular/core';
import { TabViewModule } from 'primeng/tabview';

@Component({
  selector: 'app-tab-parent',
  standalone: true,
  imports: [TabViewModule],
  templateUrl: './tab-parent.component.html',
  styleUrl: './tab-parent.component.scss'
})
export class TabParentComponent {

}
