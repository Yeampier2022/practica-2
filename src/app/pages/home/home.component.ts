import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Router,
} from '@angular/router';
import { HomeService } from 'src/app/@core/services/home.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  messages = this.HomeService.note;

  index = null;
  form = this.handleCreateForm();


  constructor(
    private HomeService: HomeService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  handleSubmit() {
    const formValue = this.form.value;
    if (this.index === null || this.index === undefined) {
      console.log('asdasdfasdfasdf');

      this.messages.push(formValue);
    } else {
      this.messages[this.index] = formValue;
    }
    this.router.navigate(['list']);
  }


  handleCreateForm() {
    this.index = this.route.snapshot.params['index'];

    const form = new FormGroup({
      todo: new FormControl('', Validators.required),
    });

    if (this.index !== null) {
      form.patchValue(this.messages[this.index]);
    }
    return form;
  }


  ngOnInit(): void {
  }

}
