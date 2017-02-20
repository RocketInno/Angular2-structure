import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { CONSTANT } from './../shared/constant/';
import { Document } from './documents.interface';

@Injectable()
export class DocuemetService {

	constructor(private http: Http) { }

	public getDocuements(): Observable<Array<Document>> {
		return this.http.get(`${CONSTANT.API_RAILS}documents`)
			.map((response: Response) => <Array<Document>>response.json())
			.catch(this.handleError);
	}

	private handleError(error: Response) {
		return Observable.throw(error);
	}
}
