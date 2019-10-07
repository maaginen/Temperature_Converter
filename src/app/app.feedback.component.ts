import { Component }      from '@angular/core';
import {  MyRemoteService } from './app.myremoteservice';

@Component({
    templateUrl: './feedback.html'
})
export class FeedBackComponent {
    emailAddress: string;
    feedbackMsg: string;
    feedbackResponseMsg: string;
    feedbackResponseStatus: string;
    formSubmitted: boolean;

    constructor(private remoteService: MyRemoteService)
    {}

    submitForm(inputEmailValid: boolean, inputMsgValid: boolean) {
        this.formSubmitted = true;
        if(inputEmailValid && inputMsgValid) {
            this.postFeedback();
            this.emailAddress = "";
            this.feedbackMsg = "";
            this.formSubmitted = false;
        } else {
            console.log("Invalid email")
        }
    }

    postFeedback() {
        let FeedBackObject = {
            "Email": this.emailAddress,
            "Message": this.feedbackMsg
        }

        this.remoteService.postName(FeedBackObject)
        // Subscribe to observable.
            .subscribe(

                // Success.
                data => {
                    this.feedbackResponseMsg    = data["Message"];
                    this.feedbackResponseStatus = data["Status"];
                    console.log(data)
                },
                // Error.
                error => {
                    alert(error)
                },
                // Final instructions.
                () => {
                    console.log("Finished")
                });
    }
}