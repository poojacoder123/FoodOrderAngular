import { Component, inject, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonService } from '../../../service/common.service';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  isRegistered : boolean = false;

  constructor(
    private commonService: CommonService, 
    private router: Router) {}
  private formBuilder = inject(FormBuilder);

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required],
    });
  }

  register() {
    this.commonService
      .registerUser(this.registerForm.value)
      .subscribe((result) => {});
    this.router.navigateByUrl('/login');
    this.isRegistered = true;
  }

}
