import {
    HOME_INFO, HOME_SEARCH_COUNT, HOME_RECOMMEND, HOME_PIN
  } from '@constants/home'
  import {
    API_HOME, API_HOME_SEARCH_COUNT, API_HOME_RECOMMEND, API_HOME_PIN
  } from '@constants/api'
  import { createAction } from '@utils/redux'

  
  /**
 * 商品总数
 * @param {*} payload
 */
export const dispatchSearchCount = payload => createAction({
    url: API_HOME_SEARCH_COUNT,
    type: HOME_SEARCH_COUNT,
    payload
  })