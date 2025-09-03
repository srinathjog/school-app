import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header class="bg-blue-600 text-white py-4 shadow">
      <div class="container mx-auto flex justify-between items-center px-4">
        <h1 class="text-2xl font-bold">Student Management</h1>
      </div>
    </header>
  `
})
export class HeaderComponent {}
