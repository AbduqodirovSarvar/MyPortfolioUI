import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../assets/demo_data/test.data';

@Component({
  selector: 'app-contact',
  standalone: true,
  providers: [DataService],
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'] // Corrected property name to styleUrls
})

export class ContactComponent {
  dataService: DataService;
  constructor(private dataservice: DataService) {
    this.dataService = dataservice;
  }

  getUser(){
    return this.dataService.getUsers();
  }
}
