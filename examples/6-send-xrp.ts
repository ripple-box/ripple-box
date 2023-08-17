import { Client as XrplClient, Wallet, xrpToDrops } from 'xrpl';
import * as dotenv from 'dotenv'

dotenv.config()

async function sendXRP(): Promise<void> {
  const testnetServer = process.env.ENDPOINT!
  const destinationAddress = process.env.ACCOUNT_1!

  const wallet = Wallet.fromSeed(process.env.SEED_0!)
  console.log("sender", wallet.address)

  const client = new XrplClient(testnetServer);
  await client.connect();
  console.log('connected')

  try {

    const prepared = await client.autofill({
      "TransactionType": "Payment",
      "Account": wallet.address,
      "Amount": xrpToDrops("7"),
      "Destination": destinationAddress
    })
    const signed = wallet.sign(prepared)
    const tx = await client.submitAndWait(signed.tx_blob)

    console.log('tx', tx)

  } catch (error) {
    console.error('Error sending XRP:', error);
  }

  await client.disconnect();
}

sendXRP().catch((error) => {
  console.error('Error:', error);
});

