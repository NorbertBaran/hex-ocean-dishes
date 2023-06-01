sudo apt update
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs
sudo apt install git -y
git clone -b master https://github.com/NorbertBaran/hex-ocean-dishes.git
cd hex-ocean-dishes
npm install --global yarn
yarn install
yarn dev