import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Personal} from '../data/formData.model';
import {FormDataService} from '../data/form-data.service';

@Component({
  selector: 'app-personal',
  template: `
	<form #personalForm="ngForm" class="editForm" novalidate>
	<div class="tab-pane active">
        <h4 class="head text-center">{{title}}</h4>
        <br/>
        <div class='row'>
            <div class='col-xs-offset-1 col-xs-10 col-sm-offset-2 col-sm-8'>
                <div class="row">
                    <div class='col-xs-12 col-sm-6'>
                        <div class="form-group">
                            <label for="firstname">First Name</label>  
                            <input class="form-control input-md" #firstname="ngModel" required id="firstname" name="firstname" type="text" placeholder="First Name" [(ngModel)]="personal.firstName">   
                            <div class="alert alert-danger" [hidden]="firstname.valid">First Name is required</div>
                        </div>
                    </div>
                    <div class='col-xs-12 col-sm-6'>
                        <div class="form-group">
                            <label class="control-label" for="lastname">Last Name</label>  
                            <input class="form-control input-md" #lastname="ngModel" required id="lastname" name="lastname" type="text" placeholder="Last Name" [(ngModel)]="personal.lastName">
                            <div class="alert alert-danger" [hidden]="lastname.valid">Last Name is required</div>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label class="control-label" for="email">Email</label>
                    <input class="form-control input-md" #email="ngModel" required pattern="^[^\s@]+@[^\s@]+\.[^\s@]{2,}$" id="email" name="email" type="email" placeholder="Email" [(ngModel)]="personal.email">
                    <div class="alert alert-danger" [hidden]="email.valid">Email is required and must be valid</div>
                </div>
                    
                <div class="form-group text-center">
                    <button class="btn btn-success btn-outline-rounded btn-info" [disabled]="!personalForm.valid" (click)="goToNext(personalForm)"> Next <span style="margin-left:10px;" class="glyphicon glyphicon-arrow-right"></span></button>
                </div>
            </div>
        </div>
    </div>
	</form>
  `,
  styles: []
})
export class PersonalComponent implements OnInit {
	title = 'Please tell about yourself';
	personal: Personal;
	form: any;
	
  constructor(private router: Router, private formDataService: FormDataService) { }

  ngOnInit() {
	  this.personal = this.formDataService.getPersonal();
	  console.log('Personal loaded');
  }
  save(form: any): boolean{
	  if(!form.valid){
		  return false;
	  }
	  this.formDataService.setPersonal(this.personal);
	  return true;
  }
  goToNext(form: any){
	  if(this.save(form)){
		  this.router.navigate(['/work']);
	  }
	}
}
