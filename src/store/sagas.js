import { all, fork } from "redux-saga/effects"

//public
import LayoutSaga from "./layout/saga"
import dashboardSaga from "./dashboard/saga"

import sessionSaga from "./session/saga"

//Schema
import schema from "../schema/"

const additionalSagas  = schema.filter(_ => _.visible).map(_ => fork(_.saga))

export default function* rootSaga() {
  yield all([
    //public
    fork(LayoutSaga),
    fork(dashboardSaga),
    fork(sessionSaga)
  ].concat(additionalSagas))
}
