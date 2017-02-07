import { Routes, RouterModule } from '@angular/router';

import { ProposalComponent } from './proposal.component';
import { ProposalNewComponent }  from './proposal-new/';
import { ProposalShowComponent } from './proposal-show/';

const routes: Routes = [
	{
		path: 'proposals',
		component: ProposalComponent
	},
	{
		path: 'proposals/new',
		component: ProposalNewComponent
	},
	{
		path: 'proposal/:id',
		component: ProposalShowComponent
	},
];

export const PROPOSAL_ROUTES = RouterModule.forRoot(routes, { useHash: false });
