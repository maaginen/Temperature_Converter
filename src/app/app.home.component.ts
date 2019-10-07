import { Component }      from '@angular/core';
import {  MyRemoteService } from './app.myremoteservice';
import {isNumber} from "util";

@Component({
    templateUrl: './home.html'
})
export class HomeComponent {
    celsius: number;
    fahrenheit: number;

    returnedCelsius: number;
    returnedFahrenheit: number;
    displayedCelsius: number;
    displayedFahrenheit: number;

    celsiusFormSubmitted: boolean;
    fahrenheitFormSubmitted: boolean;

    constructor(private remoteService: MyRemoteService)
    {}

    processData(data: Array<any>) {
        if(data["Celsius"]) {
            this.returnedCelsius = data["Celsius"];
            this.displayedFahrenheit = this.fahrenheit;
        } else if(data["Fahrenheit"]) {
            this.returnedFahrenheit = data["Fahrenheit"];
            this.displayedCelsius = this.celsius;
        }
    }

    submitCelsius(valid: boolean) {
        this.celsiusFormSubmitted = true;
        if(valid) {
            this.convertToF(this.celsius);
        }
    }

    submitFahrenheit(valid: boolean) {
        this.fahrenheitFormSubmitted = true;
        if(valid) {
            this.convertToC(this.fahrenheit);
        }
    }

    convertToC(fahrenheit: number) {
        this.remoteService.getCelsius(fahrenheit)
        // Subscribe to observable.
            .subscribe(
                // Success.
                data => {
                    this.processData(data);
                },
                // Error.
                error => {
                    //alert(error)
                },
                // Final Instructions.
                () => {
                    console.log("Finished")
                });

    }

    convertToF(celsius: number) {
        this.remoteService.getFahrenheit(celsius)
        // Subscribe to observable.
            .subscribe(
                // Success.
                data => {
                    this.processData(data);
                },
                // Error.
                error => {
                    //alert(error)
                },
                // Final Instructions.
                () => {
                    console.log("Finished")
                });
    }
}