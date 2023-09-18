FROM bun:1.0

EXPOSE 3000

# copy over codebase
COPY . .

# install NPM modules
RUN bun install

# bundle up npm modules so bun can read them in faster
RUN bun bun ./server.ts

# start the service
CMD ["bun", "run", "./server.ts"]
