import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { HomepageComponent } from "./homepage/homepage.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, HomepageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '531proj-frontend';
}
