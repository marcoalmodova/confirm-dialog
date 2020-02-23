/**
 * Created by marcoalmodova on 23/02/2020.
 */

import {LightningElement, track} from 'lwc';

export default class ParentComponent extends LightningElement {
    @track isDialogVisible = false;
    @track originalMessage;
    @track displayMessage = 'Click on the \'Open Confirmation\' button to test the dialog.';

    handleClick(event){
        if(event.target.name === 'openConfirmation'){
            //it can be set dynamically based on your logic
            this.originalMessage = 'test message';
            //shows the component
            this.isDialogVisible = true;
        }else if(event.target.name === 'confirmModal'){

            //when user clicks outside of the dialog area, the event is dispatched with detail value  as 1
            if(event.detail !== 1){
                //gets the detail message published by the child component
                this.displayMessage = 'Status: ' + event.detail.status + '. Event detail: ' + JSON.stringify(event.detail.originalMessage) + '.';

                //you can do some custom logic here based on your scenario
                if(event.detail.status === 'confirm') {
                    //do something
                }else{
                    //do something else
                }
            }

            //hides the component
            this.isDialogVisible = false;
        }
    }
}