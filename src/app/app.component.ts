import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

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
      email: new FormControl('', [Validators.required, Validators.email]),
      pass: new FormControl('', Validators.required),
      country: new FormControl('ua'),
      answer: new FormControl('no')
    });
  }

  onSubmit() {

  }


}
