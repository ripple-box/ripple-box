// import { Client as XrplClient, PaymentFlags } from 'xrpl';
import WebSocket from 'ws'
import * as dotenv from 'dotenv'

dotenv.config()

async function listenToTransactions(accountAddress: string): Promise<void> {
  const testnetWebSocketUrl = 'wss://s.altnet.rippletest.net:51233';
  const ws = new WebSocket(testnetWebSocketUrl, {
    timeout: 10_000
  });

  ws.on('open', () => {
    console.log('WebSocket connected');

    const subscribeRequest = {
      id: 1,
      command: 'subscribe',
      // streams: ['transactions'],
      accounts: [accountAddress],
    };

    ws.send(JSON.stringify(subscribeRequest));
  });

  ws.on('message', (data: WebSocket.Data) => {
    const message = JSON.parse(data.toString());

    if (message.type === 'transaction' && message.transaction && message.transaction.TransactionType === 'Payment') {
      console.log('Received payment');
      console.log('Transaction details:', message.transaction);
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

const yourXRPAddress = process.env.ACCOUNT_0!;

listenToTransactions(yourXRPAddress).catch((error) => {
  console.error('Error:', error);
});


// async function main() {
//   const ws = new WebSocket('wss://s.altnet.rippletest.net:51233')


//   ws.addEventListener('message', (event) => {
//     console.log('Got message from server:', event)
//   })

//   const options = {
//     id: "autoid_0",
//     command:"subscribe",
//     accounts: ["rJ1Y8zSrbTbrSKR7fCYRNELdAvAhScmH8b"]
//   }
//   ws.send(JSON.stringify(options))
// }

// main()
