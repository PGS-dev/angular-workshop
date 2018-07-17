export const ButtonStoriesTmpl = `
  <div class="l-container">
    <div class="l-section">
      <h1>Links</h1>
      <p>Links as "a" elements.</p>
    </div>
  
    <div class="l-section l-section--withBorderBottom">
      <h2>Simple link primary</h2>
      <p>Primary link for main actions.</p>
  
      <aw3-button
        [isButton]="false"
        [text]="'Simple link primary'"></aw3-button>
    </div>
  
    <div class="l-section l-section--withBorderBottom">
      <h2>Simple link (actions)</h2>
      <p>Actions links - remove/edit.</p>
  
      <aw3-button
        [isButton]="false"
        [text]="'Simple link remove'"
        [classes]="'c-button--error'"></aw3-button>
      <aw3-button
        [isButton]="false"
        [text]="'Simple link edit'"
        [classes]="'c-button--edit'"></aw3-button>
    </div>
  
    <div class="l-section l-section--withBorderBottom">
      <h2>Simple link secondary</h2>
      <p>Secondary link for main actions.</p>
  
      <aw3-button
        [isButton]="false"
        [text]="'Simple link secondary'"
        [classes]="'c-button--secondary'"></aw3-button>
    </div>
  
    <div class="l-section l-section--withBorderBottom">
      <h2>Simple links (social)</h2>
      <p>Links used for related with social portals.</p>
  
      <aw3-button
        [isButton]="false"
        [text]="'Simple link Facebook'"
        [classes]="'c-button--fb'"></aw3-button>
      <aw3-button
        [isButton]="false"
        [text]="'Simple link Github'"
        [classes]="'c-button--github'"></aw3-button>
    </div>
  </div>
`;
