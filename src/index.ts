const native = require('bindings')('win32crypt')

import type { protectDataFn, unprotectDataFn } from './types'

const win32crypt = {
    protectData: native.protectData as protectDataFn,
    unprotectData: native.unprotectData as unprotectDataFn
}

export default win32crypt
export const protectData = win32crypt.protectData
export const unprotectData = win32crypt.unprotectData
