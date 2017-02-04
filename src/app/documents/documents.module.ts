import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DOCUMENTS_ROUTES } from './documents.router';
import { DocumentsComponent } from './documents.component';

@NgModule({
	imports: [
		CommonModule,
		DOCUMENTS_ROUTES
	],
	declarations: [DocumentsComponent]
})
export class DocumentsModule { }
