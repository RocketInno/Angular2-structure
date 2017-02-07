import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-proposal-show',
	templateUrl: './proposal-show.component.html',
	styleUrls: ['./proposal-show.component.css']
})
export class ProposalShowComponent implements OnInit {
	private id: number;

	constructor(private route: ActivatedRoute) { }

	ngOnInit() {
		this.id = this.route.snapshot.params['id'];
	}

}
