import { NgModule } from '@angular/core';
import { MaterialModule } from '../../all-material.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { usersRouter } from './users.router';

// services
import { UsersService } from '../../services/users/users.service';

// rxjs
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

// firebase
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

// 3rd party libaries
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

// components
import { SearcherComponent } from '../../components/searcher/searcher.component';
import { UsersComponent } from './users.component';

// Resolvers
import { UsersResolver } from './users.resolve';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        AngularFireDatabaseModule,
        AngularFireAuthModule,
        NgxPaginationModule,
        Ng2SearchPipeModule,
        usersRouter,
        FormsModule
    ],
    declarations: [
        UsersComponent,
        SearcherComponent
    ],
    providers: [
        UsersService,
        UsersResolver
    ]
})
export class UsersModule { }
