import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  // UI State
  uiState = {
    isLoading: false,
    isSubmitting: false
  }
  // Form
  signUpFormGroup: FormGroup

  constructor(private fb: FormBuilder) { }


  ngOnInit(): void {
    this.initForm()
  }


  initForm() {
    this.signUpFormGroup = this.fb.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.pattern(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/),]],
      password: [null, [Validators.required]],
      confirmPassword: [null, [Validators.required]]
    })
  }


  signUp() {
    this.uiState.isLoading = true
    this.uiState.isSubmitting = true
    console.log(this.signUpFormGroup.invalid)
    if (this.signUpFormGroup.invalid) {
      this.uiState.isLoading = false
      return
    }
  }

}
