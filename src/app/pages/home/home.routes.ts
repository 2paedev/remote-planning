import { Routes } from '@angular/router';
import { ROUTE } from '@constants/index';
import { HomePage } from './home.page';

export const homeRoutes: Routes = [{ path: ROUTE.HOME, component: HomePage }];

export class HomeRoutingModule {}
