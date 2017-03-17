import reducer, { initialState } from '../../src/reducers/settings'
import { INIT_STATE } from '../../src/actions'
import { SET_URL, ERROR, SET_CLIENT, SET_ANALYTIC } from '../../src/actions/settings'

describe('settings reducers', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {}))
    .toEqual(initialState)
  })

  it('should handle SET_URL', () => {
    const url = 'http://localhost'
    expect(reducer({serverUrl: '', error: 'defined', authorized: false}, {type: SET_URL, url: url}))
    .toEqual({serverUrl: url, error: null, authorized: false})
  })

  it('should handle SET_ANALYTIC', () => {
    expect(reducer({analytic: false}, {type: SET_ANALYTIC, analytic: true})).toEqual({analytic: true})
    expect(reducer({analytic: true}, {type: SET_ANALYTIC, analytic: false})).toEqual({analytic: false})
  })

  it('should handle ERROR', () => {
    const msg = 'error'
    expect(reducer({error: null}, {type: ERROR, error: msg}))
    .toEqual({error: msg})
  })

  it('should handle INIT_STATE', () => {
    expect(reducer({serverUrl: 'serverUrl', backupImages: true, error: 'error'}, {type: INIT_STATE}))
    .toEqual(initialState)
  })

  it('should set a client into the state with "SET_CLIENT"', () => {
    const client = { someParameter: 'Some Value' }
    expect(reducer(undefined, { type: SET_CLIENT, client }).client).toEqual(client)
  })
})
