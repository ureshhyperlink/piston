import * as loginActions from '../../app/actions/loginActions';
import * as types from '../../app/actions/types';


describe('ACTIONS', () => {
   it('should create an action with correct type', () => {
      const expectedAction = {
         type: types.LOGIN_REQUEST,
         username: 'test',
         password: 'test',
      };
      expect(loginActions.requestLogin('test', 'test')).toEqual(expectedAction);
   });
});