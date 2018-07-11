import {moduleMetadata, storiesOf} from '@storybook/angular';
import { withNotes } from '@storybook/addon-notes';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Welcome, Button } from '@storybook/angular/demo';

import { LoginComponent } from "../app/components/login/login.component";
import { AngularFireAuth } from "angularfire2/auth";
import { AuthService } from "../app/common/services/auth/auth.service";

storiesOf('Welcome', module).add('to Storybook', () => ({
  component: Welcome,
  props: {}
}));

storiesOf('LoginComponent', module)
  .addDecorator(
    moduleMetadata({
      providers: [
        {
          provide: AngularFireAuth,
          useValue: {
            auth: {
              currentUser: null
            }
          }
        },
        {
          provide: AuthService,
          useValue: {}
        }
      ]
    })
  )
  .add('when not authorized user', () => ({
    component: LoginComponent,
    props: {}
  }));
