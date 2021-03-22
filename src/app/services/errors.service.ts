import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { SpinnerService } from "./spinner.service";

@Injectable({
  providedIn: "root",
})
export class ErrorsService {
  errorCode: number;

  constructor(private router: Router, private spinnerService: SpinnerService) {}

  handleError(error) {
    switch (error.status) {
      case 404:
        this.errorCode = 404;
        break;
      case 500:
        this.errorCode = 500;
        break;
    }
    this.spinnerService.showSpinner = false;

    setTimeout(() => {
      this.router.navigate(["/"]);
    }, 2000);
  }
}
