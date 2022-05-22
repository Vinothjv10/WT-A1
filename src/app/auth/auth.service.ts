import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
// import { JwtHelperService } from '@auth0/angular-jwt';
import { Jobs } from '../auth/models/item';
import { HttpClient } from '@angular/common/http'
import { finalize } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private basePath = '/jobs';

  [x: string]: any;
  isLoggedIn = false

  constructor(public firebaseAuth: AngularFireAuth, public afs: AngularFirestore,
    public db: AngularFireDatabase,
    public storage: AngularFireStorage,
    public http: HttpClient) {
  }

  // submit()
  // {
  //   let _url="assets/data/data.json";
  //   return this.http.get(_url);
  // }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('access_token') || '';
    return !this.jwtHelper.isTokenExpired(token);
  }

  getItems() {
    return this.users;

  }
  async signin(email: string, password: string) {
    await this.firebaseAuth.signInWithEmailAndPassword(email, password)
      .then(res => {
        this.isLoggedIn = true
        localStorage.setItem('user', JSON.stringify(res.user))
      })
  }
  logout() {
    this.firebaseAuth.signOut()
    localStorage.removeItem('user')
  }

  getItem() {
    return this.afs.collection('jobs').snapshotChanges();
  }

  updateItem(user: Jobs) {
    this.afs.doc(`jobs/${user.id}`).update(user);

  }

  deleteItem(userId: string) {
    this.afs.doc('jobs/' + userId).delete();
  }
}
