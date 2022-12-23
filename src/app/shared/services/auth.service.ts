import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LocallyStoredItemsKeys } from '../model/LocallyStoredItemsKeys';
import { AuthReq } from '../model/AuthReq';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { AppRoutes } from '../model/AppRoutes';
import { ApiRoutes } from '../model/ApiRoutes';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl;
  isLoggedIn = new BehaviorSubject<boolean>(this.isTokenAvailable());
  constructor(private http: HttpClient, private router: Router) { }


  sign(authReq: AuthReq): Observable<AuthReq> {
    return this.http.post(this.apiUrl + ApiRoutes.Auth.signIn, authReq).pipe(
      tap((res: any) => {
        // Save access token on local storage
        localStorage.setItem(LocallyStoredItemsKeys.JWT, res.access_token);
        // Set authenticated user flag
        this.setIsLoggedIn(true);
      })
    );
  }

  /**
  * Remove JWT Token
  */
  async logout(): Promise<any> {
    // Clear JWT from localstorage
    await localStorage.clear();
    // Update logged in status
    this.setIsLoggedIn(false);
    // Navigate user back to signIn page
    await this.router.navigate([AppRoutes.Auth.signIn.main]);
  }

  private isTokenAvailable(): boolean {
    return !!localStorage.getItem(LocallyStoredItemsKeys.JWT);
  }

  setIsLoggedIn(isLoggedIn: boolean): void {
    this.isLoggedIn.next(isLoggedIn);
  }

  getIsLoggedIn(): BehaviorSubject<boolean> {
    return this.isLoggedIn;
  }
}
