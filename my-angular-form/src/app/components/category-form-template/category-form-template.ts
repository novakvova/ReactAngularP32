import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors} from '@angular/forms';
import {KeyValuePipe, NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-category-form-template',
  imports: [
    ReactiveFormsModule,
    NgIf,
    NgForOf,
    KeyValuePipe
  ],
  templateUrl: './category-form-template.html',
  styleUrl: './category-form-template.css'
})
//Java - extends - наслідування класів
// implements - наслідування інтерфейсів

export class CategoryFormTemplate implements OnInit {
  //Цей клас приймає у себе параметри
  @Input() title: string = 'Create Category';

  @Output() formSubmit =
    new EventEmitter<FormGroup>();

  //Форма для категорії, потрібно надати значення
  categoryForm: FormGroup;
  errorMessage: string | null = null;

  //FormBuilder - клас для побудови форм
  constructor(private fb: FormBuilder) {
    this.categoryForm = this.fb.group({
      title: ['', this.requiredMessage('Назва є обов\'язковою')],
      urlSlug: [''],
      image: null
    })
  }

  //Коли буде виконуватися редагування категорії
  ngOnInit(): void {
    console.log("Ініціалізація об'єкта", "Можу послати запит на севрер")
  }

  requiredMessage(message: string) {
    return (control: AbstractControl): ValidationErrors | null => {
      return control.value ? null : { required: message };
    }
  }

}
