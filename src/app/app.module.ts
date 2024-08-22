import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReteModule } from "rete-angular-plugin";

import { AppComponent } from "./app.component";
import { CustomNodeComponent } from "./custom-node/custom-node.component";
import { CustomSocketComponent } from "./custom-socket/custom-socket.component";

@NgModule({
  declarations: [
    AppComponent,
    CustomNodeComponent,
    CustomSocketComponent,
  ],
  imports: [BrowserModule, CommonModule, ReteModule ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
