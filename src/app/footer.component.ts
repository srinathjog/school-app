import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="bg-gray-800 text-gray-200 py-4 mt-8">
      <div class="container mx-auto text-center text-sm">
        &copy; {{currentYear}} Student Management. All rights reserved.
      </div>
    </footer>
  `
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
