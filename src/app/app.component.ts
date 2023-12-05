import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import {DialogBodyComponent} from './components/dialog-body/dialog-body.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'web-app';
  constructor(private matDialog: MatDialog) {}
 
  ngOnInit(): void {
    initFlowbite();
  }
}