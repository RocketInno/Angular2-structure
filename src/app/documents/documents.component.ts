import { Component, OnInit } from '@angular/core';

import { Document } from './documents.interface';

@Component({
	selector: 'app-documents',
	templateUrl: './documents.component.html',
	styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {
	private pageTitle: string = 'Documents Dashboard';
	private documents: Array<Document> = [
		{
			title: 'Dcument 1',
			description: 'Description',
			file_url: 'http://google.com',
			update_at: 'ayer',
			image_url: 'http://google.com'
		},
		{
			title: 'Dcument 2',
			description: 'Description',
			file_url: 'http://google.com',
			update_at: 'ayer',
			image_url: 'http://google.com'
		},
		{
			title: 'Dcument 3',
			description: 'Description',
			file_url: 'http://google.com',
			update_at: 'ayer',
			image_url: 'http://google.com'
		}
	];

	constructor() { }

	ngOnInit() {
	}

}
