import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PROPOSAL_ROUTES } from './proposal.router';
import { ProposalComponent } from './proposal.component';
import { ProposalNewComponent } from './proposal-new/';
import { ProposalShowComponent } from './proposal-show/';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		PROPOSAL_ROUTES
	],
	declarations: [
		ProposalComponent,
		ProposalNewComponent,
		ProposalShowComponent
		]
})
export class ProposalModule { }
