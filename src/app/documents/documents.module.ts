import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DOCUMENTS_ROUTES } from './documents.router';
import { DocumentsComponent } from './documents.component';
import { DocuemetService } from './documents.service';

@NgModule({
	imports: [
		CommonModule,
		DOCUMENTS_ROUTES
	],
	declarations: [DocumentsComponent],
	providers: [DocuemetService]
})
export class DocumentsModule { }
