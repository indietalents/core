import { FormsModule } from './../../../pages/forms/forms.module';
import { FormDataService } from './../data/formData.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.scss']
})
export class TypeComponent implements OnInit {

  title = 'Please, choose type of your talent.';
  type: string = '';
  form: any;

  constructor(
      private router: Router, 
      private activatedRoute: ActivatedRoute,
      private formDataService: FormDataService) {
  }

  ngOnInit() {
    this.type = '';
    console.log('Type feature loaded!');
  }

  save(form: any): boolean {

    this.formDataService.setType(this.type);
    this.router.navigate(['../subtype'], {relativeTo: this.activatedRoute});
    return true;
  }

}
