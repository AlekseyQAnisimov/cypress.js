describe('Покупка аватара', function () {

    it('e2e тест на покупку нового аватара для тренера', function () {
        cy.visit('https://pokemonbattle.me/'); // Захожу на сайт
        cy.get(':nth-child(1) > .auth__input').type('xxxxxxxx'); // Ввожу логин
        cy.get('#password').type('xxxxxxxx'); // Ввожу пороль
        cy.get('.auth__button').click();  // Нажимаю кнопку "Войти"
        cy.get('.header__btns > [href="/shop"]').click(); // Нажимаю кнопку "Магазин"
        cy.get('.shop__list > li').not('.feature-empty').children('.shop__button').eq(0).click();  // Не на своём аватаре нажимаю кнопку "Купить"
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4111 1111 1111 1111');  // Ввожу номер валидной карты
        cy.get(':nth-child(1) > .pay_base-input-v2').type('0625'); // Ввожу срок действия карты
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125') // Ввожу успешный код
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('MONYA IZIVICH');  // Ввожу имя
        cy.get('.pay__main-v2').click();  // Клик в молоко чтобы система поняла что ввод закончен и кнопка "Оплатить" стала активной
        cy.get('.pay-btn').click();  // Нажимаю кнопку оплатить
        cy.get('#cardnumber').type('56456');  // Ввожу смс код
        cy.get('.payment__submit-button').click();  // Нажимаю кнопку "Отправить"
        cy.get('.payment__font-for-success').contains('Покупка прошла успешно');  // Проверяю что появилась надпись об успехе
        // Тут бы еще проверить поменялся ли аватар на странице тренера на купленый, но я не смог додуматся как.

    })

 })
 