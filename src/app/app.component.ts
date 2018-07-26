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
  charsCount = 5;

  ngOnInit(): void {
    this.form = new FormGroup({
      user: new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        pass: new FormControl('', [Validators.required, this.checkForLength.bind(this)])

      }),
      country: new FormControl('ua'),
      answer: new FormControl('no')
    });
  }

  onSubmit() {

  }

  checkForLength(control: FormControl) {
    if (control.value.length <= this.charsCount) {
      return {
        'lengthError': true
      };
    }
    return null;
  }


}
