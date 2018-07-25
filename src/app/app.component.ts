import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  @ViewChild('form') form: NgForm;

  answers = [
    {type: 'yes', text: 'Да'},
    {type: 'no', text: 'Нет'}
  ];

  defaultAnswer = 'no';
  defaultCountry = 'ukr';

  formData = {};
  isSubmited = false;

  submitForm() {
    this.isSubmited = true;
    this.formData = this.form.value;
    this.form.reset();
  }

  addRandEmail() {
    const randEmail = 'a@a';
    // this.form.setValue({
    //   user: {
    //     pass: '',
    //     email: randEmail
    //   },
    //   country: '',
    //   answer: ''
    // });
    this.form.form.patchValue({
      user: {
        email: randEmail
      }
    });
  }

}
