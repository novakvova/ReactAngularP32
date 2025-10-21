import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ICategory, ICategoryCreate} from '../models/Category';

@Injectable({
  providedIn: 'root'
})

export class CategoryService {
  private apiURL = "https://lohika.itstep.click/api/";
  constructor(private http: HttpClient) {}

  getCategories() : Observable<ICategory[]> {
    return this.http.get<ICategory[]>(this.apiURL + "categories/list");
  }

  createCategory(formData: FormData) {

    return this.http.post(this.apiURL + "categories/create", formData);
  }

  deleteCategory(id: number) {

    return this.http.delete(this.apiURL + "categories/delete/", {
      body: { id }
    });
  }

  getCategoryBySlug(slug: string) : Observable<ICategory> {

    return this.http.get<ICategory>(this.apiURL + "categories/" + slug);
  }

  editCategory(formData: FormData) {

    return this.http.put(this.apiURL + "categories/edit", formData);
  }
}
