
describe('Тестирование авторизации на login.qa.studio', function () {
    
    it('Валидные логин и пороль.', function () {
        cy.visit('https://login.qa.studio/');                                      // Захожу на сайт
        cy.get('#mail').type('german@dolnikov.ru');                                // Ввожу логин
        cy.get('#loginButton').should('be.disabled');                              // Проверяю что кнопка "Войти" не кликабельна
        cy.get('#pass').type('iLoveqastudio1');                                    // Ввожу пороль
        cy.get('#loginButton').should('be.enabled');                               // Проверяю что кнопка "Войти" кликабельна
        cy.get('#loginButton').click();                                            // Нажимаю кнопку "Войти"
        cy.get('#messageHeader').should('be.visible');                             // Текст виден пользователю
        cy.get('#messageHeader').contains('Авторизация прошла успешно');           // Проверяю текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');             // Проверяю наличие крестика

         })

    it('Востоновление пороля.', function () {
        cy.visit('https://login.qa.studio/');                                      // Захожу на сайт
        cy.get('#forgotEmailButton').click();                                      // Нажимаю кнопку "Забыли пороль?"
        cy.get('#exitRestoreButton > .exitIcon').should('be.visible');             // Проверяю наличие крестика
        cy.get('#mailForgot').type('german@dolnikov.ru');                          // Ввожу логин
        cy.get('#restoreEmailButton').click();                                     // Нажимаю кнопку "Отправить код"
        cy.get('#messageHeader').should('be.visible');                             // Текст виден пользователю
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');   // Проверяю текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');             // Проверяю наличие крестика
    
        })


    it('Невалидный пороль.', function () {
        cy.visit('https://login.qa.studio/');                                      // Захожу на сайт
        cy.get('#mail').type('german@dolnikov.ru');                                // Ввожу логин
        cy.get('#loginButton').should('be.disabled');                              // Проверяю что кнопка "Войти" не кликабельна
        cy.get('#pass').type('qwerty');                                            // Ввожу пороль
        cy.get('#loginButton').should('be.enabled');                               // Проверяю что кнопка "Войти" кликабельна
        cy.get('#loginButton').click();                                            // Нажимаю кнопку "Войти"
        cy.get('#messageHeader').should('be.visible');                             // Текст виден пользователю
        cy.get('#messageHeader').contains('Такого логина или пароля нет');         // Проверяю текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');             // Проверяю наличие крестика
        
        })  
                 
    it('Невалидный логин.', function () {
        cy.visit('https://login.qa.studio/');                                      // Захожу на сайт
        cy.get('#mail').type('aleksey@dolnikov.ru');                               // Ввожу логин
        cy.get('#loginButton').should('be.disabled');                              // Проверяю что кнопка "Войти" не кликабельна
        cy.get('#pass').type('iLoveqastudio1');                                    // Ввожу пороль
        cy.get('#loginButton').should('be.enabled');                               // Проверяю что кнопка "Войти" кликабельна
        cy.get('#loginButton').click();                                            // Нажимаю кнопку "Войти"
        cy.get('#messageHeader').should('be.visible');                             // Текст виден пользователю
        cy.get('#messageHeader').contains('Такого логина или пароля нет');         // Проверяю текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');             // Проверяю наличие крестика
                    
        })  


    it('Валидный логин без @.', function () {
        cy.visit('https://login.qa.studio/');                                      // Захожу на сайт
        cy.get('#mail').type('germandolnikov.ru');                                 // Ввожу логин
        cy.get('#loginButton').should('be.disabled');                              // Проверяю что кнопка "Войти" не кликабельна
        cy.get('#pass').type('iLoveqastudio1');                                    // Ввожу пороль
        cy.get('#loginButton').should('be.enabled');                               // Проверяю что кнопка "Войти" кликабельна
        cy.get('#loginButton').click();                                            // Нажимаю кнопку "Войти"
        cy.get('#messageHeader').should('be.visible');                             // Текст виден пользователю
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');   // Проверяю текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');             // Проверяю наличие крестика
                        
        })
        
        
    it('Приведение к строчным буквам в логине.', function () {
        cy.visit('https://login.qa.studio/');                                      // Захожу на сайт
        cy.get('#mail').type('GerMan@Dolnikov.ru');                                // Ввожу логин
        cy.get('#loginButton').should('be.disabled');                              // Проверяю что кнопка "Войти" не кликабельна
        cy.get('#pass').type('iLoveqastudio1');                                    // Ввожу пороль
        cy.get('#loginButton').should('be.enabled');                               // Проверяю что кнопка "Войти" кликабельна
        cy.get('#loginButton').click();                                            // Нажимаю кнопку "Войти"
        cy.get('#messageHeader').should('be.visible');                             // Текст виден пользователю
        cy.get('#messageHeader').contains('Авторизация прошла успешно');           // Проверяю текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');             // Проверяю наличие крестика
    
        })        
})
