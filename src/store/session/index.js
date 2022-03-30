/*
 *
 *  session
 *
 */

import actions from './actions'
import reducer from './reducer'
import saga from './saga'
import remotes from './remotes'
import selectors from './selectors'


const session = {
    name: 'session',
    actions,
    reducer,
    saga,
    remotes,
    selectors
}

export default session