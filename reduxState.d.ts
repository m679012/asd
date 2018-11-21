export default interface RootState {
  ping: Ping
  theme: Theme
  repositories: {
    [id: number]: Repository
  }
  router: any /* react-router-redux */
}
interface Repository {
  id: number
  info: RepositoryData<RepositoryDataInfo>
  commits: Array<RepositoryData<RepositoryDataCommit>>
  branches: { [name: string]: RepositoryData<RepositoryDataBranch> }
}

export type Ping = any[/* unique IDs !null & !void */]
export type Theme = 'DARK' | 'LIGHT'

export type RepositoryStateDone = 'DONE'
export type RepositoryStateLoading = 'LOADING'
export type RepositoryStateFailed = 'FAILED'
export interface RepositoryDataWithData<DATA> {
  state: RepositoryStateDone
  data: DATA
}
export interface RepositoryDataWithoutData {
  state: RepositoryStateLoading | RepositoryStateFailed
}
export type RepositoryData<T> = RepositoryDataWithData<T> | RepositoryDataWithoutData

export interface RepositoryDataInfo {
  id: number
  default_branch: string
  [prop: string]: any
}
export interface RepositoryDataCommit {
  [prop: string]: any
}
export interface RepositoryDataBranch {
  [prop: string]: any
  is_default: boolean
}
