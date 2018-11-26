var {Given, When, Then} = require('cucumber')

Given(/^Browser URL "([^"]*)"$/,function(url){
browser.url(url)
})
When(/^Page loaded with URL$/,function(){
console.log('page loaded')
})
Then(/^Web Page title is "([^"]*)"$/,function(title){
expect(browser.getTitle()).to.eql(title)
})
