import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Components
import { RewardsComponent } from './rewards.component';
import { RewardsListComponent } from './rewards-list/rewards-list.component';
import { SearchComponent } from '../../components/search/search.component';
import { ProductCardComponent } from '../../components/product-card/product-card.component';

// Router
import { RewardsRouter } from './rewards.router';

// 3th part library
// import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RewardsRouter,
        // TranslateModule
    ],
    declarations: [
        RewardsComponent,
        RewardsListComponent,
        SearchComponent,
        ProductCardComponent
    ]
})
export class RewardsModule { }
