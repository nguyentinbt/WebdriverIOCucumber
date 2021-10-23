import * as path from 'path';

export const DEMO_ACCOUNTS = {
    demoAccount: {
        username: 'nguyentin.cnpm@gmail.com',
        password: 'Tin@123456',
        firstName: 'Tin',
        lastName: 'Nguyen'
    },
    testUser: {
        username: 'nguyentin.cnpm+testuser@gmail.com',
        password: '123456',
        firstName: 'Tin',
        lastName: 'Nguyen'
    },
    backupUser: {
        username: 'autobots.noggin+testingplan@gmail.com',
        password: '123456',
        firstName: 'Tin',
        lastName: 'Nguyen'
    }
};

export const appList = {
    Amazon: {
        name: 'Amazon',
        BasedRUL: 'https://www.amazon.com/'
    },
    herokuapp: {
        name: 'herokuapp',
        BasedRUL: 'https://the-internet.herokuapp.com/'
    },
    toolsQA: {
        name: 'toolsQA',
        BasedRUL: 'https://demoqa.com/'
    }
};

export const DEFAULT_DOWNLOAD_PATH = path.join(__dirname, '../assets/downloads');
export const HARD_DATA = path.join(__dirname, '../assets/hard-data');
