# win32crypt
Windows Data Protection API for Node.js.
Based on original work from [bradhugh/node-dpapi](https://github.com/bradhugh/node-dpapi).

## API:
```typescript
function protectData(
    data: Uint8Array,
    entropy: Uint8Array,
    scope: "CurrentUser" | "LocalMachine"
): Uint8Array;

function unprotectData(
    data: Uint8Array,
    entropy: Uint8Array,
    scope: "CurrentUser" | "LocalMachine"
): Uint8Array;
```

## Example:
```javascript
import { protectData, unprotectData } from 'win32crypt';

const context = 'CurrentUser'

const decrypted = Buffer.from('test data', 'utf-8')
const entropy = Buffer.from('entropy', 'utf-8')

const encrypted = protectData(decrypted, null, context)
const encryptedWithEntropy = protectData(decrypted, entropy, context)

console.log(
    `(${context}) Decrypted: ${unprotectData(encrypted, null, context)}`
)
console.log(
    `(${context}) Decrypted with entropy: ${unprotectData(encryptedWithEntropy, entropy, context)}`
)
```
