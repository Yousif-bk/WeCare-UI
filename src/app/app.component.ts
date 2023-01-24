import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isLoggedIn: boolean = false
  constructor(private authService: AuthService) { }
  ngOnInit(): void {
    this.loginWatch();
  }
  loginWatch() {
    this.authService.getIsLoggedIn().subscribe({
      next: (value) => {
        this.isLoggedIn = value
      }
    })
  }
}
