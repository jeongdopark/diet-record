import { atom } from 'recoil'
import { RecordType } from '../../pages/record/components/calendar'

export const recordState = atom<RecordType | undefined>({
  key: 'recordState',
  default: {},
})
