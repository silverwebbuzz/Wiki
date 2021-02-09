import { Injectable, Inject } from '@angular/core';
import { APP_CONFIG, AppConfig } from '../app.config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/concatMap';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(@Inject(APP_CONFIG) private config: AppConfig, private http:HttpClient,) { }

  public getAppVersion():Observable<any>{
    const myHeaders = new HttpHeaders({ 'Content-Type': 'application/json'});
    return this.http
    .get(this.config.apiBase + 'V1/getAppversion/',{headers:myHeaders})
    .concatMap(data=>{
      return Observable.of(data);
    })
  }

  public RegistrationUser(Body:any):Observable<any>{
    const myHeaders = new HttpHeaders({ 'Content-Type': 'application/json'});
    return this.http
    .post(this.config.apiBase + 'users/registration', Body,{headers:myHeaders})
    .concatMap(data=>{
      return Observable.of(data);
    })
  }

  public LoginUser(Body:any):Observable<any>{
    const myHeaders = new HttpHeaders({ 'Content-Type': 'application/json'});
    return this.http
    .post(this.config.apiBase + 'users/login', Body,{headers:myHeaders})
    .concatMap(data=>{
      return Observable.of(data);
    })
  }

  public ForgotPasswordUser(Body:any):Observable<any>{
    const myHeaders = new HttpHeaders({ 'Content-Type': 'application/json'});
    return this.http
    .post(this.config.apiBase + 'users/forgotepassword', Body,{headers:myHeaders})
    .concatMap(data=>{
      return Observable.of(data);
    })
  }

  public UploadUserResume(formData:any):Observable<any>{
    return this.http
    .post(this.config.apiBase + 'users/uploadresume', formData)
    .concatMap(data=>{
      return Observable.of(data);
    })
  }

  public getTeamMembers():Observable<any>{
    const myHeaders = new HttpHeaders({ 'Content-Type': 'application/json'});
    return this.http
    .get(this.config.apiBase + 'users/memberDetail',{headers:myHeaders})
    .concatMap(data=>{
      return Observable.of(data);
    })
  }

  public getPageDetails():Observable<any>{
    const myHeaders = new HttpHeaders({ 'Content-Type': 'application/json'});
    return this.http
    .get(this.config.apiBase + 'users/pagesDetail',{headers:myHeaders})
    .concatMap(data=>{
      return Observable.of(data);
    })
  }

  public getUsersType():Observable<any>{
    const myHeaders = new HttpHeaders({ 'Content-Type': 'application/json'});
    return this.http
    .get(this.config.apiBase + 'users/usertypelist',{headers:myHeaders})
    .concatMap(data=>{
      return Observable.of(data);
    })
  }

  public getNews():Observable<any>{
    const myHeaders = new HttpHeaders({ 'Content-Type': 'application/json'});
    return this.http
    .get(this.config.apiBase + 'users/newsList',{headers:myHeaders})
    .concatMap(data=>{
      return Observable.of(data);
    })
  }

  public getUserDetails(Body:any):Observable<any>{
    const myHeaders = new HttpHeaders({ 'Content-Type': 'application/json'});
    return this.http
    .post(this.config.apiBase + 'users/getUserInformation', Body,{headers:myHeaders})
    .concatMap(data=>{
      return Observable.of(data);
    })
  }

  public getAllUsers():Observable<any>{
    const myHeaders = new HttpHeaders({ 'Content-Type': 'application/json'});
    return this.http
    .get(this.config.apiBase + 'users/allusers',{headers:myHeaders})
    .concatMap(data=>{
      return Observable.of(data);
    })
  }

  public editUserProfile(formData:any):Observable<any>{
    return this.http
    .post(this.config.apiBase + 'users/updateUserInfo', formData)
    .concatMap(data=>{
      return Observable.of(data);
    })
  }

  public createUserProfile(body):Observable<any>{
    return this.http
    .post(this.config.apiBase + 'users/addUser', body)
    .concatMap(data=>{
      return Observable.of(data);
    })
  }

  public updateProfilePassword(body):Observable<any>{
    return this.http
    .post(this.config.apiBase + 'users/changePassword', body)
    .concatMap(data=>{
      return Observable.of(data);
    })
  }
}