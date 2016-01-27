# MagicMirror
This is a ExpressJS app that launches an all black website. The website is meant to run behind a one-way mirror, hence creating the "Magic Mirror" effect. https://www.youtube.com/watch?v=bvWccv8719M

## Assumptions
This repo is not a tutorial
* You know how NodeJS and ExpressJS apps work.
* You know how AWS IoT gateway works.

## Things to configure
* Paste your AWS IoT certificate and private key in the `keys/` directory. If you change the name of the key files, you must also change them in the `config.js` file.
* Edit `config.js` with your AWS IoT region and host.