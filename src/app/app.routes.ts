import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TextComponent } from './pages/text/text.component';
import { AudioComponent } from './pages/audio/audio.component';
import { ImageComponent } from './pages/image/image.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },  // Default route for Home
  { path: 'text', component: TextComponent },
  { path: 'audio', component: AudioComponent },
  { path: 'image', component: ImageComponent }
];
