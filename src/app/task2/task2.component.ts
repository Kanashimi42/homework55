import { Component } from '@angular/core';
import { HttpClientModule} from "@angular/common/http";
import { HttpService } from '../http.service';
import { Album } from '../albut';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-task2',
  standalone: true,
  imports: [HttpClientModule, NgFor],
  templateUrl: './task2.component.html',
  styleUrl: './task2.component.css',
  providers:[HttpService]
})
export class Task2Component {
  albums: Album[] = [];

  constructor(private httpService: HttpService){}

  ngOnInit(){
    this.httpService.getDataRx().subscribe({next:(data: Album[]) => this.albums=data});
  }
}
