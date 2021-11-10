import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mhs',
  templateUrl: './mhs.component.html',
  styleUrls: ['./mhs.component.css']
})
export class MhsComponent implements OnInit {
  name: string[];
  constructor() {
    this.name = ['Feliciano','Marsel','Kevin','Budi'];
   }

  ngOnInit(): void {
  }

}
