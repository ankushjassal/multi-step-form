import { Component, OnInit, Input } from '@angular/core';
import {FormDataService} from './data/form-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-multi-step';
  @Input() formData;
  
  constructor(private formDataService: FormDataService){}
  ngOnInit(){
	  this.formData = this.formDataService.getFormData();
	  console.log(this.title + 'loaded');
  }
}
