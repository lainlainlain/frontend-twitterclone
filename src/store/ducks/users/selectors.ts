import { RootState } from '../../store';
import { UsersState } from './contracts/state';

export const selectUsersState = (state: RootState): UsersState => state.users;

export const selectUsersStateItems = (state: RootState): UsersState['items'] => state.users.items;
