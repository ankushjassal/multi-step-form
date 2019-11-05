import { Injectable } from '@angular/core';
import { FormData, Personal, Address} from './formData.model';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {
	
	private formData: FormData = new FormData();
	private isPersonalFormValid: boolean = false;
	private isWorkFormValid: boolean = false;
	private isAddressFormValid: boolean = false;
	
	getPersonal(): Personal{
		var personal: Personal = {
			firstName: this.formData.firstName,
			lastName: this.formData.lastName,
			email: this.formData.email
		};
		return personal;
	}
	setPersonal(data: Personal){
		this.isPersonalFormValid = true;
		this.formData.firstName = data.firstName;
		this.formData.lastName = data.lastName;
		this.formData.email = data.email;
	}
	getWork(): string{
		return this.formData.work;
	}
	setWork(data: string){
		this.isWorkFormValid = true;
		this.formData.work = data;
	}
	getAddress(): Address{
		var address: Address = {
			street: this.formData.street,
			city: this.formData.city,
			state: this.formData.state,
			zip: this.formData.zip
		};
		return address;
	}
	setAddress(data: Address){
		this.isAddressFormValid = true;
		this.formData.street = data.street;
		this.formData.city = data.city;
		this.formData.state = data.state;
		this.formData.zip = data.zip;
	}
	getFormData(): FormData{
		return this.formData;
	}
	resetFormData(): FormData{
		this.formData.clear();
		this.isPersonalFormValid = this.isAddressFormValid = this.isWorkFormValid = false;
		return this.formData;
	}
	isFormData(){
		return this.isPersonalFormValid && this.isWorkFormValid && this.isAddressFormValid;
	}
  constructor() { }
}
