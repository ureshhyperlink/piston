import * as types from '../../app/actions/types';
import { loadingReducer } from '../../app/reducers/loadingReducer';
import { loginReducer } from '../../app/reducers/loginReducer';

describe('REDUCER', () => {
    const mockLoginResponse = { success: true, data: { id: 1 } };

    it('should return the initial state', () => {
        expect(loadingReducer({}, {type: types.LOGIN_ENABLE_LOADER})).toEqual({isLoginLoading: true});
     });

     it('should return the valid user id', () => {
        expect(loginReducer({}, {type: types.LOGIN_RESPONSE, response: mockLoginResponse})).toEqual({id: mockLoginResponse.id, isLoggedIn: true});
     });
 });