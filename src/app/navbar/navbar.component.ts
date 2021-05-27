import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-navbar-cmp',
    templateUrl: 'navbar.component.html'
})
export class NavbarComponent {

    sidebarVisible = false;

    constructor(private translate: TranslateService) {
    }

    setLang(lang: string): void {
        this.translate.use(lang);
    }

    sidebarToggle(): void {
        const body = document.getElementsByTagName('body')[0];

        if (this.sidebarVisible === false){
            body.classList.add('nav-open');
            this.sidebarVisible = true;
        } else {
            this.sidebarVisible = false;
            body.classList.remove('nav-open');
        }
    }
}
