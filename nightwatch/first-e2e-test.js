module.exports = {
    testLogin: login => {
        login
            .url('http://127.0.0.1:5500')
            .waitForElementVisible('.sign-in-main-wrapper')
            .assert.visible('input[type=email]')
            .setValue('input[type=email]', 'thomas@facadia.com')
            .assert.visible('input[type=password]')
            .setValue('input[type=password]', 'azerty')
            .assert.visible('button[type=submit]')
            .click('button[type=submit]')
            .assert.visible('.home-page')
            .url('http://127.0.0.1:5500/#/home')
    },
    
    testHome: onTheHome => {
        onTheHome
            .url('http://127.0.0.1:5500/#/home')
            .waitForElementVisible('.section-title')
            .assert.containsText('.section-title','Vos capteurs')
            .assert.visible('.sensor-info-btn')
            .click('.sensor-info-btn')
    },
    
    testSensorPage: onTheSensorPage => {
        onTheSensorPage
            .url('http://127.0.0.1:5500/#/facade-details')
            .waitForElementVisible('.section-title')
            .assert.containsText('.section-title', 'Détails du capteur 7#')
    } 
}