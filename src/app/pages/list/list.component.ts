import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/@core/services/home.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  messages = this.homeService.note;

  constructor( private homeService: HomeService, private router: Router) {}

  handleDelete(index: any) {
    const isConfirmed = confirm('Estas seguro de eliminar?');
    if (!isConfirmed) {
      return;
    }

    this.homeService.note = this.messages.filter(
      (value: any, i) => i !== index
    );
    this.messages = this.homeService.note;
  }

  handleUpdate(index: number) {
    this.router.navigate(['home', index]);
  }



  ngOnInit(): void {
  }

}
