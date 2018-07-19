import {moduleMetadata, storiesOf} from '@storybook/angular';
import {withNotes} from '@storybook/addon-notes';
import {action} from '@storybook/addon-actions';
import {linkTo} from '@storybook/addon-links';
import {withKnobs, text, boolean} from '@storybook/addon-knobs/angular';

import {ButtonComponent} from "../app/components/button/button.component";

import {ButtonStoriesTmpl} from "./components/button/button-template";
import {LoaderComponent} from "../app/components/loader/loader.component";
import {RouterModule} from "@angular/router";

storiesOf('Introduction', module)
  .add('AW3 UI documentation', () => ({
    template: `
    <div class="l-container">
      <h1>Welcome to AW3 Storybook</h1>
      <p>This is AW3 application UI documentation.</p>
    </div>
    `,
    props: {}
  })
);

storiesOf('ButtonComponent', module)
  .addDecorator(
    moduleMetadata({
      declarations: [ButtonComponent],
      imports: [RouterModule],
      providers: []
    })
  )
  .add('all variants', () => ({
    template: ButtonStoriesTmpl
  }))
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .add('with knobs', () => {
    const knobIsButton = boolean('isButton', true);
    const knobText = text('text', 'John Doe');
    const knobClasses = text('classes', '');
    const knobLink = text('link', '#');
    const knobOnClick = action('Button clicked');

    return {
      moduleMetadata: {
        entryComponents: [ButtonComponent],
        declarations: [ButtonComponent]
      },
      component: ButtonComponent,
      props: {
        isButton: knobIsButton,
        text: knobText,
        classes: knobClasses,
        link: knobLink,
        onClick: knobOnClick
      },
    };
  }, {
    notes: `
      <p>User "Knobs" tab to change component props.</p>
      <h4>Available classes:</h4>
      <pre>c-button--secondary</pre>
      <pre>c-button--error</pre>
      <pre>c-button--edit</pre>
      <pre>c-button--fb</pre>
      <pre>c-button--github</pre>
    `
  });

storiesOf('LoaderComponent', module)
  .add('default', () => ({
      component: LoaderComponent,
      props: {}
    })
  );
