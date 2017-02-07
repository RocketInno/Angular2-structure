import { Routes, RouterModule } from '@angular/router';

import { ProposalComponent } from './proposal.component';
import { ProposalNewComponent }  from './proposal-new/';
import { ProposalShowComponent } from './proposal-show/';

const routes: Routes = [
	{
		path: 'proposal',
		component: ProposalComponent
	},
	{
		path: 'proposal/new',
		component: ProposalNewComponent
	},
	{
		path: 'proposal/:id',
		component: ProposalShowComponent
	},
];

export const PROPOSAL_ROUTES = RouterModule.forRoot(routes, { useHash: false });
