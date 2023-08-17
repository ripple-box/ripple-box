# Ripple code samples

## Examples to build

1. create accounts, transfer XRP
2. mint stablecoin, transfer
3. mint NFT

## Definitions

- escrow: a held payment waiting to be executed or canceled
- check: like escrow but no money is reserved. The money can be moved away causing the check to bounce
- offer: an order on the ripple DEX
- ticket: sets aside an order ID (nonce) for future use
- hook
- multi-sign
- check
- trustline
- xrp-ledger.toml File: https://xrpl.org/xrp-ledger-toml.html#serving-the-file

## Account data

Each account has the following
1. seed: shorter version of pvt key
2. private key
3. public key
4. account: shorter version of public key

## RPC urls

- wss://s.altnet.rippletest.net:51233
- wss://s.devnet.rippletest.net:51233

## Account root object

```js
{
  id: 1,
  result: {
    account_data: {
      Account: 'rPT1Sjq2YGrBMTttX4GZHjKu9dyfzbpAYe',
      Balance: '86360449705052126',
      Flags: 0,
      LedgerEntryType: 'AccountRoot',
      OwnerCount: 0,
      PreviousTxnID: 'BF58BD23329949DF9072CC094A2161066F016A252D83206DF76C5F94ED95E190',
      PreviousTxnLgrSeq: 40390581,
      Sequence: 6309412,
      index: '31CCE9D28412FF973E9AB6D0FA219BACF19687D9A2456A0C2ABC3280E9D47E37'
    },
    account_flags: {
      defaultRipple: false,
      depositAuth: false,
      disableMasterKey: false,
      disallowIncomingCheck: false,
      disallowIncomingNFTokenOffer: false,
      disallowIncomingPayChan: false,
      disallowIncomingTrustline: false,
      disallowIncomingXRP: false,
      globalFreeze: false,
      noFreeze: false,
      passwordSpent: false,
      requireAuthorization: false,
      requireDestinationTag: false
    },
    ledger_hash: 'F5AE30EB8631E2177C8981F8DDFDCD693B43E731D2682FB598A068A8C8966AFD',
    ledger_index: 40390585,
    validated: true
  },
  type: 'response'
}
```

# Audio setup

```sh
sudo apt install espeak-ng

espeak-ng "Bogdanoff speaking"
```