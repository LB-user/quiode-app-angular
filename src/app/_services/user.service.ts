import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StorageService } from './storage.service';
import { Observable } from 'rxjs';
const API_URL = 'http://localhost:8080/api/test/';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private user = this.storageService.getUser();

  constructor(private http: HttpClient, private storageService: StorageService) {}
  getPublicContent(): Observable<any> {
    const headers = new HttpHeaders({
      responseType: 'text'
    })

    const requestOptions = { headers: headers };

    return this.http.get(API_URL + 'all', requestOptions);
  }
  getUserBoard(): Observable<any> {
    const headers = new HttpHeaders({
      authorization: `${this.user.tokenType} ${this.user.accessToken}`,
      responseType: 'text'
    })

    const requestOptions = { headers: headers };

    return this.http.get(API_URL + 'user', requestOptions);
  }

  getModeratorBoard(): Observable<any> {
    const headers = new HttpHeaders({
      authorization: `${this.user.tokenType} ${this.user.accessToken}`,
      responseType: 'text'
    })

    const requestOptions = { headers: headers };

    return this.http.get(API_URL + 'mod', requestOptions);
  }
  getAdminBoard(): Observable<any> {
    const headers = new HttpHeaders({
      authorization: `${this.user.tokenType} ${this.user.accessToken}`,
      responseType: 'text'
    })

    const requestOptions = { headers: headers };

    return this.http.get(API_URL + 'admin', requestOptions);
  }
}
