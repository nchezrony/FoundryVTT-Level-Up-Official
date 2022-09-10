import { TJSDialog } from '@typhonjs-fvtt/runtime/svelte/application';
import ActionConfigDialogComponent from './dialogs/ActionConfigDialog.svelte';

/**
 * Provides a dialog for creating documents that by default is modal and not draggable.
 */
export default class ActionConfigDialog extends TJSDialog {
  constructor(item, actionId) {
    super({
      title: 'Test',
      content: {
        class: ActionConfigDialogComponent,
        props: { actionId, item }
      }
    }, { classes: ['a5e-sheet'], width: 512, height: 540 });
  }
}
