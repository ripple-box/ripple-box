# Ripple box

An IoT solution for CDBC payments. Ripple box allows merchants to easily receive payments in CDBC, and be alerted when payments are successful. Simply set up a QR scanner where customers can make payments and then listen to successful payments on the box.

## Raspberry Pi setup

- Download `sudo apt install rpi-imager`, use it to write Raspian to USB. Click gear icon for more settings:
  - SSH: `raspberrypi.local`, username `pi`
  - configure wlan

- Connect with ssh

```sh
# Check if connected- takes some time to start
ping raspberrypi.local

ssh pi@raspberrypi.local

ssh pi@192.168.0.177

# Install espeak-ng
sudo apt install espeak-ng

# Install node

# Clone repo

# Setup address to listen in .env

# Run
npm run build
npm run start:prod

# Make payment and listen to alert
```
