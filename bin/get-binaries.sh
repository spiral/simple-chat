echo "Download centrifugo"
wget --timeout=10 https://github.com/centrifugal/centrifugo/releases/download/v4.1.2/centrifugo_4.1.2_linux_amd64.tar.gz
tar xvfz centrifugo_4.1.2_linux_amd64.tar.gz centrifugo
rm -rf centrifugo_4.1.2_linux_amd64.tar.gz
chmod +x centrifugo