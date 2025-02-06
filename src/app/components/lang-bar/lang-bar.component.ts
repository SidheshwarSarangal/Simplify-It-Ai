import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lang-bar',
  standalone: true,
  templateUrl: './lang-bar.component.html',
  styleUrls: ['./lang-bar.component.css'],
  imports: [CommonModule]
})
export class LangBarComponent {
  languages: string[] = ['Hindi', 'English', 'Punjabi', 'Bengali', 'Tamil'];
  selectedLanguage: string = 'English';  // Default language is set to English
  isSidebarCollapsed: boolean = true;
  isDropdownOpen: boolean = false;

  selectLanguage(lang: string) {
    this.selectedLanguage = lang;
    this.isDropdownOpen = false;  // Close dropdown after selecting a language
  }

  toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}
