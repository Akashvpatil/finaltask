import { LightningElement } from 'lwc';
import { api, track } from 'lwc';
import getFields from '@salesforce/apex/RecordsFetcherClass.getFields';
export default class FieldNames extends LightningElement {



  @track selectedFields = [];
  @track fieldsList = [];
  
  @api getAllFields(selectedObjectName) {
    getFields({ ObjectName: selectedObjectName }).then((result) => {
      if (result) {
        console.log('the ' + selectedObjectName);
        this.fieldsList = [];
        for (let key in result) {
          console.log('in here');
          this.fieldsList.push({ label: key, value: key });
        }

      } else {
        console.log('error occured in result');
      }

    }).catch(error => {
      console.log('error occured');
    });
  }
  

  handleRecord(event) {

    console.log('Rushi999')
    this.selectedFields = event.detail.value;
    console.log('asdf' + this.selectedFields);
    
  }
  handleClick() {
    const childEvent = new CustomEvent('changeinfields', {
      detail: this.selectedFields
    }
    );
    this.dispatchEvent(childEvent);
  }


}
