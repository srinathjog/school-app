import { Component } from '@angular/core';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';
import { StudentComponent } from './student/student.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, StudentComponent],
  template: `
    <app-header></app-header>
    <main class="min-h-screen bg-gray-50">
      <app-student></app-student>
    </main>
    <app-footer></app-footer>
  `,
  styleUrl: './app.scss'
})
export class App {}
