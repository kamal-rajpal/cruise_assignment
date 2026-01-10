import { test, expect } from '@playwright/test';
const { POManager } = require('../pageobjects/POManager');
//Json->string->js object
const dataset = JSON.parse(JSON.stringify(require("../utils/TestData.json")));


