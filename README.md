# HexOcean Dishes - recruitment task

### Versions:
1. Node: 18.16.0
1. Yarn: 1.22.19
1. Vite: 4.3.9

### Production:
HexOcean Dishes live preview available [here](http://35.158.94.59/).\
Deployed on Amazon Web Services.

### Local preview:
If you prefer run production version locally use *launch.sh* script:
```bash
curl -sSL https://raw.githubusercontent.com/NorbertBaran/hex-ocean-dishes/master/launch.sh | sudo sh
```
Linux distribution with apt package manager eg. Debian/Ubuntu required.

### Development environment:
If you want to prepare your own development environment and run development preview use *init.sh* script:
```bash
curl -sSL https://raw.githubusercontent.com/NorbertBaran/hex-ocean-dishes/master/init.sh | sudo sh
```
Linux distribution with apt package manager eg. Debian/Ubuntu required.


### Docker images used for production build and run:
1. [node:18.16.0-alpin](https://hub.docker.com/_/node)
1. [nginx:1.25.0-alpine](https://hub.docker.com/_/nginx)

### Time to perform the task:
~30h