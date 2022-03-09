import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { NotificationsService, NotificationType } from "angular2-notifications";
import { Router } from "@angular/router";
import { AuthService } from "src/app/shared/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
})
export class LoginComponent implements OnInit {
  @ViewChild("loginForm") loginForm: NgForm;
  userNameModel = "";
  passwordModel = "";

  buttonDisabled = false;
  buttonState = "";

  constructor(
    private authService: AuthService,
    private notifications: NotificationsService,
    private router: Router
  ) {}

  ngOnInit() {}

  onSubmit() {
    if (!this.loginForm.valid || this.buttonDisabled) {
      return;
    }
    this.buttonDisabled = true;
    this.buttonState = "show-spinner";
    this.authService.login(this.loginForm.value).subscribe(
      (data: any) => {
        this.authService.loggedIn.next(true);
        sessionStorage.setItem("token", data.token);
        this.router.navigate(["/app"]);
      },
      (error) => {
        this.buttonDisabled = false;
        this.buttonState = "";
        this.notifications.create(
          "Error",
          error.message,
          NotificationType.Bare,
          { theClass: "outline primary", timeOut: 6000, showProgressBar: false }
        );
      }
    );
  }
}
