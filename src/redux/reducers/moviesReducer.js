import { TYPES } from '../actions/types';
import _ from 'lodash';

export default (state = {}, action) => {
	switch (action.type) {
		case TYPES.FETCH_MOVIES:
			const result = _.map(action.payload.result, (o) =>
				_.extend({ endPoint: action.payload.endPoint }, { key_id: `${action.payload.endPoint}_${o.id}` }, o)
			);
			return { ...state, ..._.mapKeys(result, 'key_id') };
		default:
			return state;
	}
};
