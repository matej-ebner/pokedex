import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { IconsModule } from "src/app/icons/icons.module";

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule, ReactiveFormsModule, IconsModule],
  exports: [CommonModule, RouterModule, ReactiveFormsModule, IconsModule],
})
export class SharedModule {}
