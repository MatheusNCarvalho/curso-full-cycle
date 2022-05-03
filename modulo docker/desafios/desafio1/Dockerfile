FROM golang as builder

WORKDIR /usr/src/app

COPY . .

RUN go build hello-world.go


FROM hello-world
COPY --from=builder /usr/src/app .

CMD [ "./hello-world" ]