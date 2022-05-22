import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { Jobs } from '../auth/models/item'

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent implements OnInit {


  // filteredString =new FormControl('');
  // locationString = new FormControl('');
  filteredString: string = '';

  items: Jobs[] = [];

  constructor(private router: Router, public firebaseService: AuthService) { }

  ngOnInit(): void {
    this.firebaseService.getItem().subscribe((data: any[]) => {
      this.items = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Jobs;
      })
    });
  }

}

