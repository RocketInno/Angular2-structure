import { Component, OnInit } from '@angular/core';

import { Document } from './documents.interface';
import { DocuemetService } from './documents.service';

@Component({
	selector: 'app-documents',
	templateUrl: './documents.component.html',
	styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent implements OnInit {
	private pageTitle: string = 'Documents Dashboard';
	private documents: Array<Document> = [];

	constructor(private docuemetService: DocuemetService) { }

	ngOnInit() {
		this.docuemetService.getDocuements()
			.subscribe(
				data => {
					console.log(data, 'data');
					this.documents = data;
				},
				error => {
					console.log(error, 'error');
				}
			);
	}

}
