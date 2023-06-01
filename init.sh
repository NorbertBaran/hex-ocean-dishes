sudo apt update
sudo apt install curl git
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs
git clone -b master https://github.com/NorbertBaran/hex-ocean-dishes.git
cd hex-ocean-dishes
npm install --global yarn
yarn install
yarn dev