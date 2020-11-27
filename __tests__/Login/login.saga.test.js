import { put, takeLeading } from 'redux-saga/effects';
import * as types from '../../app/actions/types';
import { loginRequest } from '../../app/sagas/index';
import loginSaga from '../../app/sagas/loginSaga';
import loginAsync  from '../../app/sagas/loginSaga';
import * as loginActions from '../../app/actions/loginActions';

describe('SAGA', () => {
    it('should perform login request validation', () => {
        const generator = loginRequest();
        expect(generator.next().value)
            .toEqual(takeLeading(types.LOGIN_REQUEST, loginSaga));
        expect(generator.next().done).toBeTruthy();
    });

    it('should perform login request', () => {
        const mockLoginResponse = { success: true, data: { id: 1 } };
        const generator = loginAsync();
        generator.next();
        expect(generator.next(mockLoginResponse.data).value)
            .toEqual(put(loginActions.onLoginResponse(mockLoginResponse.data)));
        expect(generator.next().value)
            .toEqual(put(loginActions.disableLoader({})));
        expect(generator.next().done).toBeTruthy();
    });
});