import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  answers = [
    {type: 'yes', text: 'Да'},
    {type: 'no', text: 'Нет'}
  ];

  form: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(''),
      pass: new FormControl(''),
      country: new FormControl('ua'),
      answer: new FormControl('no')
    });
  }

  onSubmit() {

  }


}
