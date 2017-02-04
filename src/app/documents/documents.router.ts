import { Routes, RouterModule } from '@angular/router';

import { DocumentsComponent } from './documents.component.ts';

const routes: Routes = [
	{
		path: 'documents',
		component: DocumentsComponent
	},
];

export const DOCUMENTS_ROUTES = RouterModule.forRoot(routes, { useHash: false });
