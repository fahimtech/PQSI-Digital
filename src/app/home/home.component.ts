import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/services/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  addForm: FormGroup;
  showWelcome: boolean = true;
  profileData: any = [];
  showPostForm: boolean = false;

  constructor(public route: Router, public appService: AppService, private fb: FormBuilder) {
    this.addForm = this.fb.group({
      name: ['', Validators.required],
      job: ['', Validators.required]
    })
  }

  ngOnInit() {
    this.getProfileData();
  }

  ionViewWillEnter() {
    this.showWelcome = true;
    this.showPostForm = false;
  }

  logout(): void {
    this.route.navigateByUrl('login');
  }

  continue(): void {
    this.showWelcome = false;
  }

  getProfileData(): void {
    this.appService.getData('api/users').subscribe(
      success => {
        console.log(success);
        this.profileData = success.data;
      }, error => { });
  }

  addSubmit(): void {
    if (this.addForm.valid) {
      console.log("data ===>", this.addForm.getRawValue());
      const params = {
        name: this.addForm.get("name").value,
        job: this.addForm.get("job").value
      }
      this.appService.postData('api/users', params).subscribe(
        success => {
          this.appService.showToast("Added Successfully!");
          this.addForm.reset();
        }, error => {
          this.appService.showToast("Oops, something went wrong. Please try again later.");
        });
    }
  }

  addUser(): void {
    this.showPostForm = true;
  }

  back(): void {
    this.showPostForm = false;
  }
}
