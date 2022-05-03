# docker run --rm -it -v $(pwd)/:usr/src/app -p 3000:3000 node:15 bash

# docker run --rm -it --mount type=bind,source="$(pwd)",target=/usr/src/app -p 3000:3000 node:15 bash