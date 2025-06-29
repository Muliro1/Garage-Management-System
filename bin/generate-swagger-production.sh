#!/bin/bash

# Set Rails environment to production for Swagger generation
export RAILS_ENV=production

# Generate Swagger spec for production
bundle exec rake rswag:specs:swaggerize

echo "Production Swagger spec generated with Render URLs" 