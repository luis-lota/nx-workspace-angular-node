import { NgModule, Injectable } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { coreRoutes } from "./lib.routes";
import {
  TRANSLOCO_LOADER,
  Translation,
  TranslocoLoader,
  TRANSLOCO_CONFIG,
  translocoConfig,
  TranslocoModule,
  TRANSLOCO_SCOPE,
} from "@ngneat/transloco";
import { I18nArray } from "./enum";
import { APP_CONFIG } from "./app-config";
import { FormsModule } from "@angular/forms";

@Injectable({ providedIn: "root" })
export class TranslocoHttpLoader implements TranslocoLoader {
  constructor(private http: HttpClient) {}

  getTranslation(lang: string) {
    return this.http.get<Translation>(`/assets/i18n/${lang}.json`);
  }
}

export const loader = I18nArray.reduce(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (acc: any, lang: { id: string; label: string }) => {
    acc[lang.id] = () => import(`./assets/i18n/${lang.id}.json`);
    return acc;
  },
  {}
);

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(coreRoutes),
    HttpClientModule,
    CommonModule,
    RouterModule,
    TranslocoModule,
    FormsModule,
  ],
  exports: [TranslocoModule],
  providers: [
    Title,
    {
      provide: TRANSLOCO_CONFIG,
      useFactory: (environment: { production?: boolean }) => {
        const config = {
          availableLangs: I18nArray,
            defaultLang: I18nArray[0].id,
          // Remove this option if your application doesn't support changing language in runtime.
          reRenderOnLangChange: true,
          prodMode: environment.production,
        };
        return translocoConfig(config);
      },
      deps: [APP_CONFIG],
    },
    { provide: TRANSLOCO_LOADER, useClass: TranslocoHttpLoader },
    {
      provide: TRANSLOCO_SCOPE,
      useValue: { scope: "core", alias: "CORE", loader },
    },
  ],
})
export class CoreModule {}
