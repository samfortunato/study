import { Routes } from '@angular/router';

import { NotFoundComponent } from './errors/not-found/not-found.component';

import { CreateEventComponent, EventListComponent, EventListResolverService, EventDetailsComponent, EventRouteActivatorService } from './events';

export const routes: Routes = [
  { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
  { path: 'events', component: EventListComponent, resolve: { events: EventListResolverService } },
  { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivatorService] },

  { path: '404', component: NotFoundComponent },

  { path: '', redirectTo: '/events', pathMatch: 'full' },

  { path: 'user', loadChildren: './user/user.module#UserModule' }
];
