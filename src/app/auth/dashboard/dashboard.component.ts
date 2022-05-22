import { Output } from '@angular/core';
import { Component, OnInit,EventEmitter } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '../auth.service';

import { AngularFireStorage } from '@angular/fire/storage';

import { Jobs } from '../models/item';

import { Observable } from 'rxjs';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  [x: string]: any;
  editstate: boolean= false;
  edit: boolean = true;
  itemto: Jobs[] = [];

  @Output() isLogout =new EventEmitter<void>()

  items: Jobs[] = [];

  fb: any;
  downloadURL: Observable<string> | undefined;

  constructor(public firebaseService: AuthService,
              public db:AngularFirestore,
              public storage:AngularFireStorage ) { }
  
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


  logout(){
     this.firebaseService.logout()
     this.isLogout.emit()
  }

 
  update(user:any){
     console.log(this.users)
  }

  updateId(user: Jobs) {
    this.firebaseService.updateItem(user);
    
    this.editstate = false;
    this.edit = true;
    alert('Successfully Updated')
  }

  delete(id: string) {
    this.firebaseService.deleteItem(id);
    this.editstate = false;
    this.edit = true;
    alert('Successfully Deleted')
  }
  editItem(event: any,user:any){
    this.editstate = true;
    this.edit = false;
    this.itemto = user.id;
  }

  selectFile(event:any): void {
    this.selectedFiles = event.target.files;
  }

}
