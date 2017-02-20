import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Proposal } from './proposal';
import { ProposalService } from './proposal.service';


@Component({
	selector: 'app-proposal',
	templateUrl: './proposal.component.html',
	styleUrls: ['./proposal.component.css']
})
export class ProposalComponent implements OnInit {

	proposalOne: Proposal = new Proposal(15, 'Abc Company', 'http://portfolio.jordanhudgens.com', 'Ruby on Rails', 150, 120, 15, 'jordan@devcamp.com');
	proposalTwo: Proposal = new Proposal(99, 'XYZ Company', 'http://portfolio.jordanhudgens.com', 'Ruby on Rails', 150, 120, 15, 'jordan@devcamp.com');
	proposalThree: Proposal = new Proposal(300, 'Something Company', 'http://portfolio.jordanhudgens.com',
																				'Ruby on Rails', 150, 120, 15, 'jordan@devcamp.com');

	private proposals: Array<any> = [];

	constructor(
		private proposalService: ProposalService,
		private router: Router) { }

	ngOnInit() {
		this.proposalService.getProposals()
			.subscribe(
				data => {
					this.proposals = data;
				},
				error => {
					console.log(error, 'error');
				}
			);
	}

	private goToShow(proposal): void {
		let link = ['/proposal', proposal.id];
		this.router.navigate(link);
	}



}
