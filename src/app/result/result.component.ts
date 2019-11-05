import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';
import {FormData} from '../data/formData.model';
import {FormDataService} from '../data/form-data.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styles: []
})
export class ResultComponent implements OnInit {
	
	title = 'Thanks for staying tuned';
	@Input() formData: FormData;
	isFormValid: boolean = false;
	
  constructor(private router: Router, private formDataService: FormDataService) { }

  ngOnInit() {
	  this.formData = this.formDataService.getFormData();
	  this.isFormValid = this.formDataService.isFormData();
	  console.log('Result feature loaded!');
  }
  submit(){
	  alert('data submitted');
	  this.formData = this.formDataService.resetFormData();
	  this.router.navigate(['/personal']);
	  this.isFormValid = false;
  }
}
