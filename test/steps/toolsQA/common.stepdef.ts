import { Given, Then, When } from "@cucumber/cucumber";
import { AppPage } from "src/app";
import { Common } from "src/utils/common";
import { HARD_DATA } from "src/utils/constants";
import fs = require('fs');
//import fse = require('fs-extra');
import csv = require('csv-parser');

const app = new AppPage();

//user is on the <ChallengingDOM> page
Given(/^user is on the Challenging DOM page$/, async () => {
    // await app.challengingDomPage.open();
    //const absolutePath = Common.getAbsolutePath('Sample-data.csv');
    const fileName = 'Sample-data.csv';
    const absolutePath = Common.getAbsolutePath(fileName, HARD_DATA);
    console.log('absolutePath', absolutePath);

    interface IObjectTypeOptions {
        qaTitle: string;
        description: string;
        whatIsThereInvolvment: string;
    }

    const results: IObjectTypeOptions[] = [];

    fs.createReadStream(absolutePath)
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', () => {
            console.log(results);
            results.forEach(async element => {
                console.log("element.qaTitle:", element.qaTitle);
            });
            return results;
        });

    for (let index = 0; index < results.length; index++) {
        const element = results[index];
        console.log("element.qaTitle:", element.qaTitle);

    }

    results.forEach(async element => {
        console.log("element.qaTitle:", element.qaTitle);

    });


});



When(/^user try to get text$/, async () => {

});

When(/^user try to get value$/, async () => {

});

Then(/^user should see the corresponding data$/, async () => {

});
