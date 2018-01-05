import { FormDataService } from './registration/data/formData.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  title = 'Multi-Step Wizard';
  @Input() formData;
  
  constructor(private formDataService: FormDataService) {
    console.log('AuthComponent loaded.');
  }

  ngOnInit() {
      this.formData = this.formDataService.getFormData();
      console.log('AuthComponent loaded!');
  }
}
