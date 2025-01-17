import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "../../../shared/services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: [
    "./login.component.scss",
    "../../../../assets/scss/argon-styles.scss",
  ],
})
export class LoginComponent implements OnInit, OnDestroy {
  form: FormGroup;
  public loginInvalid: boolean;

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit() {
    this.form = this.fb.group({
      username: ["", Validators.email],
      password: ["", Validators.required],
    });
  }
  ngOnDestroy() {}

  async onSubmit() {
    this.loginInvalid = false;
    if (this.form.valid) {
      try {
        await this.authService.login(this.form.value);
      } catch (err) {
        console.log("Catched error");
        this.loginInvalid = true;
      }
    }
  }
}
