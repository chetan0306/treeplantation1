import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import Tree__Plantation from '@salesforce/schema/Tree_plantation__c';
import Age from '@salesforce/schema/Tree_plantation__c.Age__c';
import Number__Of__Tree__Planted from '@salesforce/schema/Tree_plantation__c.Number_Of_Tree_Planted__c';
import Planted__In from '@salesforce/schema/Tree_plantation__c.Planted_In__c';
import Tree from '@salesforce/schema/Tree_plantation__c.Tree__c';


export default class newTreePlantation extends LightningElement {
    objectName =Tree__Plantation;
    fieldList = [Age,Number__Of__Tree__Planted,Planted__In,Tree];
//    fieldList = [Age];

    successHandler(event){
        console.log(event.detail.id);
        const toastEvent = new ShowToastEvent({
            title:"Tree Plantation created",
            message:"Record ID: " + event.detail.id,
            variant:"success"
        });
        this.dispatchEvent(toastEvent);
    }
}
