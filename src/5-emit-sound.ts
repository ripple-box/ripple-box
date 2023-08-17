import { execSync } from 'child_process'

async function main() {
  execSync('espeak-ng "Received payment of 100 Ripple"')
}

main()
