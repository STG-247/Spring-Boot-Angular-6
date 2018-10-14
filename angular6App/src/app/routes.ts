import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        children: [
            { path: '', redirectTo: 'site', pathMatch: 'full' },
            { path: 'site', loadChildren: './site/site.module#SiteModule' }
        ]
    },

    // Not found
    { path: '**', redirectTo: 'site' },

];
