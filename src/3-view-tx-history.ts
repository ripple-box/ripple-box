import { Client as XrplClient } from 'xrpl';

async function viewAccountTransactions(): Promise<void> {
  const testnetServer = 'wss://testnet.xrpl-labs.com';
  const accountAddress = process.env.ACCOUNT_0;

  const client = new XrplClient(testnetServer);
  await client.connect();

  const request = {
    account: accountAddress,
    ledger_index_min: -1,
    limit: 100,
    forward: false
  };

  console.log(`Fetching transactions for account: ${accountAddress}`);

  try {
    const transactions = await client.request({ command: 'account_tx', ...request });
    console.log('transactions', transactions)
    // console.log(`Found ${transactions.transactions.length} transactions:`);
    // for (const tx of transactions.transactions) {
    //   console.log('Transaction:', tx);
    // }
  } catch (error) {
    console.error('Error fetching transactions:', error);
  }

  await client.disconnect()
}

viewAccountTransactions().catch((error) => {
  console.error('Error:', error);
});
