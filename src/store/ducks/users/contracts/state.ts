import { LoadingStatus } from '../../../types';
import { User } from '../../user/contracts/state';

export interface UsersState {
  items: User[];
  status: LoadingStatus;
}
