import { Component, signal } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('frontend');
  protected readonly apiStatus = signal('Checking backend...');

  constructor(private apiService: ApiService) {
    this.apiService.getHealth().subscribe({
      next: (response: string) => {
        this.apiStatus.set(response);
      },
      error: () => {
        this.apiStatus.set('Backend unavailable');
      }
    });
  }
}