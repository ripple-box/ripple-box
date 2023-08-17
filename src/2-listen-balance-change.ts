import { Client as XrplClient, PaymentFlags } from 'xrpl';
import * as dotenv from 'dotenv'

dotenv.config()

async function listenForPayments(): Promise<void> {
  const testnetServer = 'wss://s.altnet.rippletest.net:51233';
  const accountAddress = process.env.PUB_KEY_0

  const client = new XrplClient(testnetServer, {
    timeout: 10_000
  });
  await client.connect();

  console.log(`Listening for payments to account: ${accountAddress}`);

  client.on('transaction', (transaction) => {
    console.log('got tx', transaction)

    if (
      transaction.transaction.TransactionType === 'Payment'
      && transaction.transaction.Destination === accountAddress
      && transaction.validated
      && transaction.meta?.TransactionResult === 'tesSUCCESS'
    ) {
      console.log('Received payment');
      console.log('Transaction details:', transaction);
    }
  });

  process.on('SIGINT', async () => {
    console.log('Stopping...');
    await client.disconnect();
    process.exit(0);
  });
}

listenForPayments().catch((error) => {
  console.error('Error:', error);
});
