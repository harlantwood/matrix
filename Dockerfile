FROM elixir:1.6.4

RUN apt-get update && apt-get install -y inotify-tools

WORKDIR "/opt/app"

RUN mix local.hex --force && mix local.rebar --force

COPY config/* config/
COPY mix.exs mix.lock ./
RUN mix do deps.get --only prod, deps.compile

COPY . ./

CMD ["sh", "bin/start"]
