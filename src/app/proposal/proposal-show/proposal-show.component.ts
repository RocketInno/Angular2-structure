import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProposalService } from './../proposal.service';

@Component({
	selector: 'app-proposal-show',
	templateUrl: './proposal-show.component.html',
	styleUrls: ['./proposal-show.component.css']
})
export class ProposalShowComponent implements OnInit {
	private id: number;
	private proposal = {};

	constructor(
		private route: ActivatedRoute,
		private proposalService: ProposalService) { }

	ngOnInit() {
		this.id = this.route.snapshot.params['id'];
		this.proposalService.getProposal(this.id)
			.subscribe(
				data => {
					this.proposal = data;
					console.log(data);
				},
				error => {
					console.log(error, 'error');
				}
			);
	}

}
