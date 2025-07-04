source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

#ruby "3.0.2"
ruby "3.2.8"
gem 'rack-cors', '~> 0.2.0'

# Bundle edge Rails instead: gem "rails", github: "rails/rails", branch: "main"
gem "rails", "~> 7.1.0"

# The original asset pipeline for Rails [https://github.com/rails/sprockets-rails]
gem "sprockets-rails"

# Use sqlite3 as the database for Active Record
gem "sqlite3", "~> 1.4", groups: [:development, :test]

# Use postgresql as the database for Active Record in production
gem "pg", "~> 1.1", group: :production

# Use the Puma web server [https://github.com/puma/puma]
gem "puma", "~> 6.0"

# Build JSON APIs with ease [https://github.com/rails/jbuilder]
gem "jbuilder"

# Use Redis adapter to run Action Cable in production
# gem "redis", "~> 4.0"
gem 'active_model_serializers'

# Use Kredis to get higher-level data types in Redis [https://github.com/rails/kredis]
# gem "kredis"

# Use Active Model has_secure_password
gem "bcrypt", "~> 3.1.7"

gem 'pagy'

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem "tzinfo-data", platforms: %i[ mingw mswin x64_mingw jruby ]

# Reduces boot times through caching; required in config/boot.rb
gem "bootsnap", require: false
# Generates fake data to populate database
#gem 'faker'

# Use Sass to process CSS
# gem "sassc-rails"

# Use Active Storage variants [https://guides.rubyonrails.org/active_storage_overview.html#transforming-images]
# gem "image_processing", "~> 1.2"

# Use Rack Attack for throttling
gem 'rack-attack'

# Use Rswag for Swagger documentation
gem 'rswag-api'
gem 'rswag-ui'
gem 'rswag-specs'

group :development, :test do
  # See https://guides.rubyonrails.org/debugging_rails_applications.html#debugging-with-the-debug-gem
  gem "debug", platforms: %i[ mri mingw x64_mingw ]
end

group :development do
  gem 'faker', :git => 'https://github.com/faker-ruby/faker.git', :branch => 'main'
  # Use console on exceptions pages [https://github.com/rails/web-console]
  gem "web-console"

  # Use letter_opener for email preview in development
  gem "letter_opener"

  # Add speed badges [https://github.com/MiniProfiler/rack-mini-profiler]
  # gem "rack-mini-profiler"

  # Speed up commands on slow machines / big apps [https://github.com/rails/spring]
  # gem "spring"
end

group :test do
  # Use system testing [https://guides.rubyonrails.org/testing.html#system-testing]
  gem "capybara"
  gem "selenium-webdriver"
  gem "webdrivers"
  gem "rspec-rails"
end
