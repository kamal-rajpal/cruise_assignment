
import {test as baseTest} from '@playwright/test';
interface TestData {
    username: string;
    password: string;
    

};
export const customTest = baseTest.extend<{testDataForOrder:TestData}>(
{
testDataForOrder :    {
    username : "@gmail.com",
    password : "",
    
    }

}

)




