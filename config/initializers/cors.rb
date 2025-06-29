Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    # Allow all origins
    origins "*"

    resource "*",
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head],
      credentials: false,
      expose: ['Set-Cookie', 'Content-Type', 'Authorization']
  end
end