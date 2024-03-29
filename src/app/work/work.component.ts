import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormDataService } from '../data/form-data.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styles: []
})
export class WorkComponent implements OnInit {
	
	title = 'What do you do?';
	workType: string;
	form: any;
  constructor(private router: Router, private formDataService: FormDataService) { }
	
  ngOnInit() {
	  this.workType = this.formDataService.getWork();
	  console.log('Work feature loaded!');
  }
  save(form: any): boolean{
	  if(!form.valid){
		  return false;
	  }
	  this.formDataService.setWork(this.workType);
	  return true;
  }
	goToPrevious(form: any){
		if(this.save(form)){
			this.router.navigate(['/personal']);
		}
	}
	goToNext(form: any){
		if(this.save(form)){
			this.router.navigate(['/address']);
		}
	}
}
