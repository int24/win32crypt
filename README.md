# win32crypt
Windows Data Protection API in Node.js.
Based on original work from [bradhugh/node-dpapi](https://github.com/bradhugh/node-dpapi).

## API:
```typescript
function protectData(
    userData: Uint8Array,
    optionalEntropy: Uint8Array,
    scope: "CurrentUser" | "LocalMachine"
): Uint8Array;

function unprotectData(
    encryptedData: Uint8Array,
    optionalEntropy: Uint8Array,
    scope: "CurrentUser" | "LocalMachine"
): Uint8Array;
```

## Example:
```javascript
import win32crypt from 'win32crypt';

const context = 'CurrentUser'

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
```
