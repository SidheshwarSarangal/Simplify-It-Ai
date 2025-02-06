import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterModule } from '@angular/router';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { LeftBarComponent } from './components/left-bar/left-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LangBarComponent } from './components/lang-bar/lang-bar.component';
import { filter } from 'rxjs'; // ✅ Import filter from rxjs

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,  // ✅ Required for *ngIf
    RouterOutlet, RouterLink, RouterModule, 
    TopBarComponent, LeftBarComponent, FooterComponent, HomeComponent, LangBarComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'simplify-it';
  showHome: boolean = true;
  showLangBar: boolean = false;  // ✅ Initialize both variables

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      // ✅ Handle both `showHome` and `showLangBar` in one place
      this.showHome = !['/text', '/audio', '/image'].includes(event.urlAfterRedirects);
      this.showLangBar = event.urlAfterRedirects !== '/';  // Show LangBar when NOT on home
    });
  }
}
