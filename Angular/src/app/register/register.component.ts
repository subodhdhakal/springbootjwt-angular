import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  role: Array<String> = [];
  selectedItem: Array<String> = [];
  dropdownSettings: any = {};
  closeDropdownSelection=false;
  disabled=false;

  ngOnInit() {
      this.role = ['mod', 'user', 'admin'];
      this.selectedItem = [''];
      this.dropdownSettings = {
          singleSelection: false,
          selectAllText: 'Select All',
          unSelectAllText: 'UnSelect All',
          allowSearchFilter: true,
          closeDropDownOnSelection: this.closeDropdownSelection
      };
  }

  onItemSelect(item: any) {
      console.log('onItemSelect', item);
  }

  toggleCloseDropdownSelection() {
      this.closeDropdownSelection = !this.closeDropdownSelection;
      this.dropdownSettings = Object.assign({}, this.dropdownSettings,{closeDropDownOnSelection: this.closeDropdownSelection});
  }

  constructor(private authService: AuthService) { }

  onSubmit() {
    console.log(this.form);
    this.authService.register(this.form).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}
