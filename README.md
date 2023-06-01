# HexOcean Dishes - recruitment task

### Versions:
1. Node: 18.16.0
1. Yarn: 1.22.19
1. Vite: 4.3.9

### Production:
HexOcean Dishes live preview available [here](http://35.158.94.59/).\
Deployed on Amazon Web Services.

### Local preview:
If you prefer run production version locally use following commands (Linux Debian/Ubuntu or any distribution with apt package manager recommended):
1. Update apt package manager:
```sudo apt update```
1. Install required packages:
```sudo apt install curl git -y```
1. Install Docker:
```curl -sSL https://get.docker.com/ | sudo sh```
1. Clone repository from master branch:
```git clone -b master https://github.com/NorbertBaran/hex-ocean-dishes.git```
1. Enter project:
```cd hex-ocean-dishes```
1. Build Docker image:
```sudo docker build -t hex-ocean-dishes .```
1. Run Docker container locally:
```sudo docker run -p 80:80 --name hex-ocean-dishes-app -d hex-ocean-dishes```

Or just download and run *launch.sh* script:
```curl -sSL https://raw.githubusercontent.com/NorbertBaran/hex-ocean-dishes/dev/launch.sh | sudo sh```

### Development environment:
If you want to prepare your own development environment and run development preview use following commands (Linux Debian/Ubuntu or any distribution with apt package manager recommended):
1. Install required packages:
```sudo apt install curl git```
1. Download node:
```curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -```
1. Install node:
```sudo apt install -y nodejs```
1. Clone repository from master branch:
```git clone -b master https://github.com/NorbertBaran/hex-ocean-dishes.git```
1. Enter project:
```cd hex-ocean-dishes```
1. Install yarn:
```npm install --global yarn```
1. Install dependencies:
```yarn install```
1. Run development preview:
```yarn dev```

### Docker images used for production build and run:
1. [node:18.16.0-alpin](https://hub.docker.com/_/node)
1. [nginx:1.25.0-alpine](https://hub.docker.com/_/nginx)

### Time to perform the task:
~30h