#!/bin/bash
mkcert -install
mkcert -key-file ./src/base/certs/key.pem -cert-file ./src/base/certs/cert.pem '*.localhost' '*.local-startup-template.io'
