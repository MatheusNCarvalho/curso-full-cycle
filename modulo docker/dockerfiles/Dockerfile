FROM ubuntu:latest


# ENTRYPOINT é um comando fisico
ENTRYPOINT [ "echo", "Hell " ]

# CMD é um comando variavel, pode ser subistituido na hora de criar o container
# CMD também pode ser como paramentro para o ENTRYPOINT
CMD ["Hello World" ]

#docker rm $(docker ps -a -q) -f

# docker build -t matheusncarvalho/hello .

# docker run  --rm matheusncarvalho/hello
#-> Hello World

# docker run  --rm matheusncarvalho/hello Matheus
#-> Hello Matheus

# docker run  --rm matheusncarvalho/hello X
#-> Hello X
