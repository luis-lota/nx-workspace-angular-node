import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { NxWelcomeComponent } from "./nx-welcome.component";
import { RouterModule } from "@angular/router";
import { appRoutes } from "./app.routes";
import { SharedUiModule } from "@poc-monorepo/shared-ui";
import { TranslocoModule } from "@ngneat/transloco";
import {  APP_CONFIG, CoreModule, httpLoader, I18nArray } from "@poc-monorepo/core";
import { environment } from "../environments/environment";

export const loader = I18nArray.reduce(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (acc: any, lang: { id: string; label: string }) => {
    acc[lang.id] = () => import(`../assets/i18n/${lang.id}.json`);
    return acc;
  },
  {}
);


@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: "enabledBlocking" }),
    SharedUiModule,
    CoreModule,
    TranslocoModule,
  ],
  providers: [
    { provide: APP_CONFIG, useValue: environment },
    httpLoader
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
