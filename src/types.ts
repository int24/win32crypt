export type protectDataFn = (
    userData: Uint8Array,
    optionalEntropy: Uint8Array | null,
    scope: Scope
) => Uint8Array

export type unprotectDataFn = (
    encryptedData: Uint8Array,
    optionalEntropy: Uint8Array | null,
    scope: Scope
) => Uint8Array

export type Scope = 'CurrentUser' | 'LocalMachine'
