import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DialogBodyComponent } from '../dialog-body/dialog-body.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  message: string = "";
  message2: string = "";

  constructor(private http: HttpClient, private matDialog: MatDialog) {}
  
  ngOnInit(): void {
    this.http
      .get('http://127.0.0.1:4200/api/user', { withCredentials: true })
      .subscribe(
        (res: any) => {
          const token = res.token;
          this.message = `Hi ${res.name}! Welcome to TastyShare!`;
        },
        (err) => {
          this.message = "You are not logged in";
          this.message2 = `${err.error.message}`;
        }
      );
  }

  openDialog(): void {
    this.matDialog.open(DialogBodyComponent, {
      width: '250px',
    });
  }
}
