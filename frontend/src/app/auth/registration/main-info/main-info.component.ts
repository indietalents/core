import { MainInfo } from './../data/formData.model';
import { FormDataService } from './../data/formData.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'undefined-main-info',
  templateUrl: './main-info.component.html',
  styleUrls: ['./main-info.component.scss']
})
export class MainInfoComponent implements OnInit {

  title = 'Please, fill this forms.';
  info: MainInfo;
  form: any;

  constructor(
      private router: Router, 
      private activatedRoute: ActivatedRoute,
      private formDataService: FormDataService) {

    this.info = formDataService.getMainInfo();
  }

  ngOnInit() {
    console.log('Type feature loaded!');
  }

  save(form: any): boolean {

    if (!form.valid) {
      return false;
    }
    

    this.formDataService.setMainInfo(this.info);

    // validate

    // call save user 
    



    this.router.navigate(['/profile'], {relativeTo: this.activatedRoute});
    return true;
  }

}
