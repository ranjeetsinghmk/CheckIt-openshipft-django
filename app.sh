
ARGS=""

ARGS=" --log-to-terminal --port 8080 --log-to-terminal"
ARGS=" --log-to-terminal --port 8080 --port 8080"

exec mod_wsgi-express start-server  --log-to-terminal --port 8080 wsgi/application
