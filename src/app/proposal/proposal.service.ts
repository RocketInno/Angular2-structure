import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { CONSTANT } from './../shared/constant/';
import { Document } from './documents.interface';

@Injectable()
export class ProposalService {

	constructor(private http: Http) { }

	public getProposals(): Observable<Array<any>> {
		return this.http.get(`${CONSTANT.API_RAILS}proposals`)
			.map((response: Response) => <Array<any>>response.json())
			.catch(this.handleError);
	}

	public getProposal(idProposal: number): Observable<any> {
		return this.http.get(`${CONSTANT.API_RAILS}proposals/${idProposal}`)
			.map((response: Response) => <any>response.json())
			.catch(this.handleError);
	}

	private handleError(error: Response) {
		return Observable.throw(error);
	}
}