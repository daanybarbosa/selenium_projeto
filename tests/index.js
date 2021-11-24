const { assert } = require('chai');
const { Builder, By, Key, WebDriver, WebElement } = require('selenium-webdriver');
//const assert = require('assert');
//const should = require('chai').should();


async function login(){

    //launch the browser
    let driver = await new Builder().forBrowser('chrome').build();

    //navigate to our application
    await driver.get('https://www.natura.com.br/');

    const element = driver.findElement(By.className("MuiInputBase-input"))
    element.sendKeys("perfume", Key.ENTER);
    element.click();

    
    
    let lis = await driver.findElement(By.className("Button_button__1xDhQ")).then(result => {
        lis.click();

    }, error => {
        console.log("deu erro");
    })


    
        /*listaProdutos.forEach(function(produto){
            produto.getText().then(function(text){
                console.log(text);
        })
            })
*/
    //await driver.findElement(By.css('button #buy-product-button'));
    // await driver.findElement(By.css("div[id='root'] li:nth-child(1)")).click();

    // return Promise.reject('Error').catch(err => {
    //     throw new Error(err);
    // });
   
    //await driver.findElement(By.id("#autocomplete-input")).click();


    // add produto
    // let produto = await driver.findElement(By.xpath("//li[1]//article[1]//div[3]//button[1]")).getText()
    //     .then(function (value){
    //         return value
    //     });
    
    // assert.strictEqual(produto, "aaa");

    // produto.should.equal("COMPRAR");

    // //close the browser
    await driver.quit();
}

login();

