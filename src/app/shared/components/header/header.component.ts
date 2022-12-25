import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  uiState = {
    isNavbarCollapsed: false,
    isOnMidScreen: false,
    activeItem: "home"
  }


  ngOnInit(): void {
    this.getScreenSize()
  }


  // Listen for window size changes
  @HostListener("window:resize", ["$event"])
  getScreenSize(event?: any): void {
    // If browser window is resized below mid screen size width
    window.innerWidth <= 858
      ? (this.uiState.isOnMidScreen = true)
      : (this.uiState.isOnMidScreen = false);
  }

  onSelected(selectedItem:string){
    this.uiState.activeItem = selectedItem
  }
}
