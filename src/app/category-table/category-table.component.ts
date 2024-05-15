import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
import { SharedModule } from '../shared/shared';

@Component({
  selector: 'app-category-table',
  standalone: true,
  imports: [
    SharedModule,
    CommonModule
  ],
  templateUrl: './category-table.component.html',
  styleUrl: './category-table.component.scss'
})
export class CategoryTableComponent implements OnInit {
  customers!: any;

  representatives!: any;

  statuses!: any[];

  loading: boolean = true;

  activityValues: number[] = [0, 100];


  ngOnInit() {
    // this.customerService.getCustomersLarge().then((customers) => {
    //   this.customers = customers;
      this.loading = false;

    //   this.customers.forEach((customer) => (customer.date = new Date(<Date>customer.date)));
    // });
    this.customers = 
    [
      {
        "id": 1000,
        "name": "James Butt",
        "country": {
          "name": "Algeria",
          "code": "dz"
        },
        "company": "Benton, John B Jr",
        "date": "2015-09-13",
        "status": "unqualified",
        "verified": true,
        "activity": 17,
        "representative": {
          "name": "Ioni Bowcher",
          "image": "ionibowcher.png"
        },
        "balance": 70663
      },
      {
        "id": 1001,
        "name": "Josephine Darakjy",
        "country": {
          "name": "Egypt",
          "code": "eg"
        },
        "company": "Chanay, Jeffrey A Esq",
        "date": "2016-02-23",
        "status": "qualified",
        "verified": false,
        "activity": 31,
        "representative": {
          "name": "Amy Elsner",
          "image": "amyelsner.png"
        },
        "balance": 82429
      },
      {
        "id": 1002,
        "name": "Art Venere",
        "country": {
          "name": "Panama",
          "code": "pa"
        },
        "company": "Chemel, James L Cpa",
        "date": "2017-05-13",
        "status": "negotiation",
        "verified": true,
        "activity": 25,
        "representative": {
          "name": "Asiya Javayant",
          "image": "asiyajavayant.png"
        },
        "balance": 28334
      },
      {
        "id": 1003,
        "name": "Lenna Paprocki",
        "country": {
          "name": "Slovenia",
          "code": "si"
        },
        "company": "Feltz Printing Service",
        "date": "2018-09-09",
        "status": "new",
        "verified": false,
        "activity": 88,
        "representative": {
          "name": "Xuxue Feng",
          "image": "xuxuefeng.png"
        },
        "balance": 88923
      },
      {
        "id": 1004,
        "name": "Donette Foller",
        "country": {
          "name": "South Africa",
          "code": "za"
        },
        "company": "Printing Dimensions",
        "date": "2019-02-11",
        "status": "proposal",
        "verified": true,
        "activity": 33,
        "representative": {
          "name": "Asiya Javayant",
          "image": "asiyajavayant.png"
        },
        "balance": 93905
      },
      {
        "id": 1005,
        "name": "Simona Morasca",
        "country": {
          "name": "Egypt",
          "code": "eg"
        },
        "company": "Chapman, Ross E Esq",
        "date": "2020-07-25",
        "status": "negotiation",
        "verified": false,
        "activity": 61,
        "representative": {
          "name": "Ivan Magalhaes",
          "image": "ivanmagalhaes.png"
        },
        "balance": 50041
      },
      {
        "id": 1006,
        "name": "Micky Zaun",
        "country": {
          "name": "Ireland",
          "code": "ie"
        },
        "company": "Hilltop Secretarial",
        "date": "2021-03-14",
        "status": "qualified",
        "verified": true,
        "activity": 79,
        "representative": {
          "name": "Anna Fali",
          "image": "annafali.png"
        },
        "balance": 82238
      },
      {
        "id": 1007,
        "name": "Granville Hibler",
        "country": {
          "name": "Egypt",
          "code": "eg"
        },
        "company": "Ingram, A Charles Jr",
        "date": "2022-08-18",
        "status": "renewed",
        "verified": false,
        "activity": 44,
        "representative": {
          "name": "Amy Elsner",
          "image": "amyelsner.png"
        },
        "balance": 45247
      },
      {
        "id": 1008,
        "name": "Easer Dragoo",
        "country": {
          "name": "Spain",
          "code": "es"
        },
        "company": "Michel Stained Glass",
        "date": "2023-01-02",
        "status": "negotiation",
        "verified": true,
        "activity": 92,
        "representative": {
          "name": "Xuxue Feng",
          "image": "xuxuefeng.png"
        },
        "balance": 9977
      },
      {
        "id": 1009,
        "name": "Maple Velasquez",
        "country": {
          "name": "Kazakhstan",
          "code": "kz"
        },
        "company": "Serrano, Zachery Esq",
        "date": "2023-06-18",
        "status": "proposal",
        "verified": false,
        "activity": 7,
        "representative": {
          "name": "Elwin Sharvill",
          "image": "elwinsharvill.png"
        },
        "balance": 14576
      }
    ]

    this.representatives = [
      { name: 'Amy Elsner', image: 'amyelsner.png' },
      { name: 'Anna Fali', image: 'annafali.png' },
      { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
      { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
      { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
      { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
      { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
      { name: 'Onyama Limba', image: 'onyamalimba.png' },
      { name: 'Stephen Shaw', image: 'stephenshaw.png' },
      { name: 'Xuxue Feng', image: 'xuxuefeng.png' }
    ];

    this.statuses = [
      { label: 'Unqualified', value: 'unqualified' },
      { label: 'Qualified', value: 'qualified' },
      { label: 'New', value: 'new' },
      { label: 'Negotiation', value: 'negotiation' },
      { label: 'Renewal', value: 'renewal' },
      { label: 'Proposal', value: 'proposal' }
    ];
  }

  clear(table: Table) {
    table.clear();
  }

  getSeverity(status: string) {
    switch (status) {
      case 'unqualified':
        return 'danger';

      case 'qualified':
        return 'success';

      case 'new':
        return 'info';

      case 'negotiation':
        return 'warning';

      case 'renewal':
        return null;

      default:
        return null;
    }
  }

}