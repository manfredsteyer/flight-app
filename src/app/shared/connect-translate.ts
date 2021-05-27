import { Injector } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { map, startWith, switchMap } from 'rxjs/operators';

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function connectTranslate(injector: Injector, parentInjector: Injector) {
    const translate = injector.get(TranslateService);
    const parentTranslate = parentInjector.get(TranslateService);

    parentTranslate.onLangChange.pipe(
      map(t => t.lang),
      startWith(translate.defaultLang),
      switchMap(lang => translate.use(lang)),
    ).subscribe(() => {
        const lang = translate.currentLang;
        translate.setTranslation(lang, parentTranslate.translations[lang], true);
    });

}
