import win32crypt from '.'

import type { Scope } from './types'

const CONTEXTS: Scope[] = ['CurrentUser', 'LocalMachine']

const decryptedBuffer = Buffer.from('test data', 'utf-8')
const entropyBuffer = Buffer.from('entropy', 'utf-8')

console.log(`Original data: ${decryptedBuffer}`)

for (const context of CONTEXTS) {
    const encryptedBuffer = win32crypt.protectData(
        decryptedBuffer,
        null,
        context
    )
    const encryptedBufferWithEntropy = win32crypt.protectData(
        decryptedBuffer,
        entropyBuffer,
        context
    )

    console.log(
        `(${context}) Decrypted: ${win32crypt.unprotectData(
            encryptedBuffer,
            null,
            context
        )}`
    )
    console.log(
        `(${context}) Decrypted with entropy: ${win32crypt.unprotectData(
            encryptedBufferWithEntropy,
            entropyBuffer,
            context
        )}`
    )
}
