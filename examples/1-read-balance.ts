import * as xrpl from 'xrpl'
import * as dotenv from 'dotenv'

dotenv.config()

async function main() {
  console.log('account', process.env.ACCOUNT_1)
  const client = new xrpl.Client("wss://s.altnet.rippletest.net:51233", {
    timeout: 10_000
  });
  await client.connect();

  const response = await client.request({
    command: "account_info",
    account: process.env.ACCOUNT_1,
    ledger_index: "validated",
  });
  console.log(response);

  await client.disconnect();
}
main();