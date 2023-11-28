import {Google} from './baseGooglePage'; 
const google = new Google(); 

test('do search', async () => {
    await google.navigate(); 
    await google.search('Chicago Bears'); 
    let text = await google.getResults(); 
    expect(text).toContain('Chicago Bears'); 
    await google.driver.quit(); 
}); 