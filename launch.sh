sudo apt update
sudo apt install curl git -y
curl -sSL https://get.docker.com/ | sudo sh
git clone -b master https://github.com/NorbertBaran/hex-ocean-dishes.git
cd hex-ocean-dishes
sudo docker build -t hex-ocean-dishes .
sudo docker run -p 80:80 --name hex-ocean-dishes-app -d hex-ocean-dishes