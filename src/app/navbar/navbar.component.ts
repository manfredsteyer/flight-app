// src/app/navbar/navbar.component.ts

import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
    selector: 'app-navbar-cmp',
    templateUrl: 'navbar.component.html'
})
export class NavbarComponent {

    sidebarVisible = false;
    expertMode = false;
    experimental = false;
    darkMode = false;

    constructor(private router: Router) {
    }

    sidebarToggle(): void {
        const body = document.getElementsByTagName('body')[0];

        if (this.sidebarVisible === false) {
            body.classList.add('nav-open');
            this.sidebarVisible = true;
        } else {
            this.sidebarVisible = false;
            body.classList.remove('nav-open');
        }
    }

    activateExpertMode() {
        this.expertMode = !this.expertMode;

        const extras: NavigationExtras = {
            queryParams: {
                expertMode: this.expertMode
            },
            queryParamsHandling: 'merge',
            preserveFragment: true
        };

        this.router.navigate([], extras);
    }

    activateExperimentalFeatures() {
        this.experimental = !this.experimental;

        const extras: NavigationExtras = {
            queryParams: {
                experimental: this.experimental
            },
            queryParamsHandling: 'merge',
            preserveFragment: true
        };

        this.router.navigate([], extras);
    }

    activateExpertModeInHash() {

        this.darkMode = !this.darkMode;

        const extras: NavigationExtras = {
            fragment: this.darkMode ? 'dark-mode' : 'light-mode',
            queryParamsHandling: 'preserve'
        };

        this.router.navigate([], extras);
    }
}
