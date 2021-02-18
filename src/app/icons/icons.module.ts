import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IconCloseComponent } from "./icon-close/icon-close.component";
import { IconInfoComponent } from "./icon-info/icon-info.component";

@NgModule({
  declarations: [IconCloseComponent, IconInfoComponent],
  exports: [IconCloseComponent, IconInfoComponent],
  imports: [CommonModule],
})
export class IconsModule {}
