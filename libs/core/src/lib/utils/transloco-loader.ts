import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { TRANSLOCO_LOADER } from '@ngneat/transloco';

@Injectable({
  providedIn: 'root',
})
export class HttpLoader {
  constructor(private http: HttpClient) {}

  getTranslation(lang: string, scope?: string) {
    const base = this.http.get(`/assets/i18n/${lang}.json`);
    if (scope) {
      return base;
    }
    return forkJoin([
      base,
      this.http.get(`/assets/i18n/${lang}.vendor.json`),
    ]).pipe(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      map(([translation, vendor]: any) => {
        return { ...translation, ...vendor };
      })
    );
  }
}

export const httpLoader = {
  provide: TRANSLOCO_LOADER,
  useClass: HttpLoader,
};
