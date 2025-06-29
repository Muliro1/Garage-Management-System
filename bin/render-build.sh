#!/usr/bin/env bash
# exit on error
set -o errexit

bundle install
bundle exec rake assets:precompile
bundle exec rake assets:clean
bundle exec rake db:create
bundle exec rake db:migrate

# Use production Swagger spec for Render
if [ -f "swagger/v1/swagger.production.json" ]; then
  cp swagger/v1/swagger.production.json swagger/v1/swagger.json
  echo "Using production Swagger spec with Render URLs"
fi 