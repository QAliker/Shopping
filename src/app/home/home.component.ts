import { Component, OnInit } from '@angular/core';
import { SuggestedProducts } from '../models/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  suggestedProducts: SuggestedProducts[] =[
    {
      banerimage: 'Baner/Baner_Mobile.png',
      category: {
        id: 0,
        category: 'electronics',
        subcategory: 'mobiles',
      },
    },
    {
      banerimage: 'Baner/Baner_Laptop.png',
      category: {
        id: 1,
        category: 'electronics',
        subcategory: 'laptop',
      },
    },
    {
      banerimage: 'Baner/Baner_Table.png',
      category: {
        id: 1,
        category: 'furniture',
        subcategory: 'table',
      },
    },
    {
      banerimage: 'Baner/Baner_Chair.png',
      category: {
        id: 1,
        category: 'furniture',
        subcategory: 'tables',
      },
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
