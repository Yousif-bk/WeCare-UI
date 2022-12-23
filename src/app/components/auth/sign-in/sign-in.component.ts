import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastService } from 'src/app/shared/services/toast.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  // UI Stat
  uiState = {
    isLoading: false,
    isSubmitting: false
  }
  // Forms
  signInFormGroup: FormGroup

  constructor(private formBuilder: FormBuilder,
    public toastService: ToastService) { }

  ngOnInit(): void {
    this.initeForm()
  }

  // inite Form
  initeForm() {
    this.signInFormGroup = this.formBuilder.group({
      email: [null, [Validators.required, Validators.pattern(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/)]],
      password: [null, [Validators.required]]
    })
  }

  signIn() {
    this.uiState.isSubmitting = true
    this.uiState.isLoading = true
    if (this.signInFormGroup.invalid) {
      this.uiState.isLoading = false
      return
    }
  }
}
