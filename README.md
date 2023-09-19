# bun-example-rest-api
rest api example build in bun.sh
## clone source and run terminal in directory source 

## docker build
<pre>
  > docker build -t bun-example-rest-api:1.0.0 .
</pre>

## docker view history build

<pre>
  > docker history bun-example-rest-api:1.0.0
</pre>

## docker run

<pre>
  > docker run --name v1-bun-example-rest-api -d -p 3000:3000 bun-example-rest-api:1.0.0
</pre>

## docker log check run rest api server

<pre>
  > docker logs -f v1-bun-example-rest-api
  Listening on http://localhost:3000 ...
</pre>

## docker login bash 

<pre>
  > docker exec -it v1-bun-example-rest-api bash
</pre>
