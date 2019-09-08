import { TYPES } from '../actions/types';
import _ from 'lodash';

export default (state = {}, action) => {
	switch (action.type) {
		case TYPES.FETCH_MOVIES:
			const result = _.map(action.payload.result, (o) =>
				_.extend({ endPoint: action.payload.endPoint }, { key_id: `${action.payload.endPoint}_${o.id}` }, o)
			);
			return { ...state, ..._.mapKeys(result, 'key_id') };
		case TYPES.FETCH_MOVIE:
			const key = `${action.payload.endPoint}_${action.payload.result.id}`;
			action.payload.result.key_id = key;
			action.payload.result.endPoint = action.payload.endPoint;
			return { ...state, [key]: action.payload.result };
		default:
			return state;
	}
};
