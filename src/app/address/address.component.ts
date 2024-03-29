import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Address} from '../data/formData.model';
import { FormDataService} from '../data/form-data.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
	title = 'Where do you live';
	address: Address;
	form: any;
	
  constructor(private router: Router, private formDataService: FormDataService) { }

  ngOnInit() {
	  this.address = this.formDataService.getAddress();
	  console.log('Address feature loaded!');
  }
  save(form: any): boolean {
        if (!form.valid) {
            return false;
        }   
        this.formDataService.setAddress(this.address);
        return true;
    }
    goToPrevious(form: any) {
        if (this.save(form)) {            
            this.router.navigate(['/work']);
        }
    }
    goToNext(form: any) {
        if (this.save(form)) {
            this.router.navigate(['/result']);
        }
    }
}
