import { dropsToXrp } from 'xrpl';
import WebSocket from 'ws'
import * as dotenv from 'dotenv'

dotenv.config()

async function listenToTransactions(accountAddress: string): Promise<void> {
  const testnetWebSocketUrl = process.env.ENDPOINT!
  const ws = new WebSocket(testnetWebSocketUrl, {
    timeout: 10_000
  });

  ws.on('open', () => {
    console.log('WebSocket connected');

    const subscribeRequest = {
      id: 1,
      command: 'subscribe',
      accounts: [accountAddress],
    };

    ws.send(JSON.stringify(subscribeRequest));
  });

  ws.on('message', (data: WebSocket.Data) => {
    const message = JSON.parse(data.toString());

    if (
      message.type === 'transaction'
      && message.transaction
      && message.transaction.TransactionType === 'Payment'
      && message.transaction.Destination === accountAddress
    ) {
      console.log('Transaction details:', message.transaction)
      const amount = dropsToXrp(message.transaction.Amount)
      console.log(`Received payment of ${amount} XRP`)
    }
  });

  ws.on('close', () => {
    console.log('WebSocket disconnected');
  });

  ws.on('error', (error) => {
    console.error('WebSocket error:', error);
  });

  process.on('SIGINT', () => {
    console.log('Stopping...');
    ws.close();
  });
}

const yourXRPAddress = process.env.ACCOUNT_1!;

listenToTransactions(yourXRPAddress).catch((error) => {
  console.error('Error:', error);
});
