import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../api/users/users.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
  public formGroupSignin: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService
  ) {}

  ngOnInit() {
    this.initFormSignin();
  }

  private initFormSignin(): void {
    this.formGroupSignin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  public submitSignin() {
    const signin = this.formGroupSignin.value;
    this.validateSignin(signin);
  }

  private validateSignin (data: any): void {
    this.usersService.signin(data).subscribe(response => {
      console.log('response', response);
    });
  }

}
