import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from '../http.service';
import { User } from '../user';

@Component({
  selector: 'app-http-request',
  standalone:true,
  imports: [HttpClientModule],
  templateUrl: './http-request.component.html',
  providers: [HttpService]
})

export class HttpRequestComponent implements OnInit {
  constructor(private httpService: HttpService) { }

  user: User | undefined;
  users: User[] = [];

  ngOnInit(): void {
    this.httpService.getData().subscribe({next: (data: any) => {
      console.log(data); this.users = data;
    }});
  }
}
