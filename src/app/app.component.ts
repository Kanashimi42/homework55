import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpRequestComponent } from './http-request/http-request.component';
import { Task2Component } from './task2/task2.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpRequestComponent, Task2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'homework1';
}
