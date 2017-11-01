import { FormDataService } from './../data/formData.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'subtype',
  templateUrl: './subtype.component.html',
  styleUrls: ['./subtype.component.scss']
})
export class SubtypeComponent implements OnInit {

  title = 'Please, choose subtype of your talent.';
  subtype: string = '';
  form: any;

  constructor(
      private router: Router, 
      private activatedRoute: ActivatedRoute,
      private formDataService: FormDataService) {
  }

  ngOnInit() {
    this.subtype = '';
    console.log('Subtype feature loaded!');
  }

  save(form: any): boolean {

    this.formDataService.setSubtype(this.subtype);
    this.router.navigate(['../info'], {relativeTo: this.activatedRoute});
    return true;
  }

}
