import { Component } from '@angular/core';
import {CategoryFormTemplate} from '../../../components/category-form-template/category-form-template';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-create',
  imports: [
    CategoryFormTemplate
  ],
  templateUrl: './create.html',
  styleUrl: './create.css'
})
export class CategoryCreate {

  onSubmit(form: FormGroup) {
    if(form.invalid) {
      return;
    }
    console.log("Submit form", form.value);
  }
}
