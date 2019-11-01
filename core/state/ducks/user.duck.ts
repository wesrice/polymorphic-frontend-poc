import { Dispatch } from 'redux';
import IUser from '../../types/User';
import IAction from './IAction';

export const actions = {
  USER_ADD: '@maxmind/core/USER_ADD',
  USER_REMOVE: '@maxmind/core/USER_REMOVE',
};

const initialState = {
  users: [] as IUser[],
};

export default (state = initialState, action: IAction) => {
  switch (action.type) {
    case actions.USER_ADD:
      return {
        ...state,
        users: [
          action.payload,
          ...state.users,
        ],
      };
    case actions.USER_REMOVE:
      return {
        ...state,
        users: state.users.filter((user: IUser) => user.uuid !== action.payload),
      };
    default:
      return state;
  }
};

export const addUser = () => {
  return (dispatch: Dispatch<any>, getState: any) => {
    fetch('https://randomuser.me/api/')
      .then((resp: any) => resp.json())
      .then(({ results }: any) => {
        const user = results[0];
        dispatch({
          payload: {
            firstName: user.name.first,
            lastName: user.name.last,
            photo: user.picture.medium,
            uuid: user.login.uuid,
          },
          type: actions.USER_ADD,
        });
      });
  }
};

export const removeUser = (uuid: string) => {
  return (dispatch: Dispatch<any>, getState: any) => {
    dispatch({
      payload: uuid,
      type: actions.USER_REMOVE,
    });
  }
};
