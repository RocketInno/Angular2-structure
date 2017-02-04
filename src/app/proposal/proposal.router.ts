import { Routes, RouterModule } from '@angular/router';

import { ProposalComponent } from './proposal.component';
import { ProposalNewComponent }  from './proposal-new/';

const routes: Routes = [
	{
		path: 'proposal',
		component: ProposalComponent
	},
	{
		path: 'proposal/new',
		component: ProposalNewComponent
	},
];

export const PROPOSAL_ROUTES = RouterModule.forRoot(routes, { useHash: false });
