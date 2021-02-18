import { Route } from "@angular/compiler/src/core";
import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "px-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"],
})
export class MenuComponent {
  constructor(public router: Router) {}

  isActiveMenuButton(component: string) {

  }
}
