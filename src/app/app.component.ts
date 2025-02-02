import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
  Injector
} from "@angular/core";
import { createEditor } from "./editor";

@Component({
  standalone: true,
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent implements AfterViewInit {
  title = "CodeSandbox";

  constructor(private injector: Injector) {}

  @ViewChild("rete") container!: ElementRef;

  ngAfterViewInit(): void {
    const el = this.container.nativeElement;

    if (el) {
      createEditor(el, this.injector);
    }
  }
}
