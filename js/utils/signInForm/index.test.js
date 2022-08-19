/**
 * @jest-environment jsdom
 */

 import '@testing-library/jest-dom'

 import {
    getByRole,
     getByTestId,
     getByLabelText
 } from '@testing-library/dom'
import userEvent from '@testing-library/user-event'
import { handleSignInForm } from './index.js'
import SignInPage from '../../pages/signIn/index.js'
 
beforeEach(() => {
    document.body.innerHTML = SignInPage.render()
    handleSignInForm()
})

afterEach(() => {
    document.body.innerHTML = ''
})

 describe('SignIn Form Integration Test Suites', () => {
    it('should display the error message when the email is not correct', () => {
        userEvent.type(
            getByLabelText(document.body, 'Votre addresse e-mail'),
            'thomas@thomas.com'
        )

        userEvent.click(getByRole(document.body, 'button'))

        expect(
            getByTestId(document.body, 'user-email-error-msg')
        ).not.toHaveClass('hidden')
    })

    it('should not display the error message when the email is correct', () => {
        userEvent.type(
            getByLabelText(document.body, 'Votre addresse e-mail'),
            'thomas@facadia.com'
        )

        userEvent.click(getByRole(document.body, 'button'))

        expect(
            getByTestId(document.body, 'user-email-error-msg')
        ).toHaveClass('hidden')

        expect(
            getByTestId(document.body, 'user-password-error-msg')
        ).not.toHaveClass('hidden')
    })

    it('should display the error message when the password is incorrect', () => {
        userEvent.type(
            getByLabelText(document.body, 'Votre addresse e-mail'),
            'thomas@facadia.com'
        )

        userEvent.type(
            getByLabelText(document.body, 'Votre mot de passe'),
            'thomas'
        )

        userEvent.click(getByRole(document.body, 'button'))

        expect(
            getByTestId(document.body, 'user-password-error-msg')
        ).not.toHaveClass('hidden')
    })

    it('should not display the error message when the email and password are correct', () => {
        userEvent.type(
            getByLabelText(document.body, 'Votre addresse e-mail'),
            'thomas@facadia.com'
        )

        userEvent.type(
            getByLabelText(document.body, 'Votre mot de passe'),
            'azerty'
        )

        userEvent.click(getByRole(document.body, 'button'))

        expect(
            getByTestId(document.body, 'user-email-error-msg')
        ).toHaveClass('hidden')

        expect(
            getByTestId(document.body, 'user-password-error-msg')
        ).toHaveClass('hidden')
    })
 })