# Ripple box

An IoT solution for CDBC payments. Ripple box allows merchants to easily receive payments in CDBC, and be alerted when payments are successful. Simply set up a QR scanner where customers can make payments and then listen to successful payments on the box.

## Demo

[![Watch the video](https://github.com/ripple-box/ripple-box/assets/49580849/9408d48e-1ef0-4569-8464-35f74f3acde6)](https://youtu.be/_TB_7EeIMY4)


Whitepaper- https://docs.google.com/document/d/185KoBPu-CVO-qirtvLZAdO8k92g0yGPP8PnovAYN1y4/edit?usp=sharing

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
ts-node examples/6-send-xrp.ts
```
