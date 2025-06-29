Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins "http://localhost:4000", 
            "https://garage-management-frontend.onrender.com",
            "https://garage-management-backend-15de.onrender.com",
            "https://localhost:4000",
            "http://localhost:3000",
            "https://localhost:3000",
            "http://localhost:5173",
            "https://localhost:5173",
            "http://localhost:8080",
            "https://localhost:8080",
            # Allow all Render domains
            /https:\/\/.*\.onrender\.com/,
            /http:\/\/.*\.onrender\.com/,
            # Allow all localhost variations
            /http:\/\/localhost:\d+/,
            /https:\/\/localhost:\d+/,
            # Allow all 127.0.0.1 variations
            /http:\/\/127\.0\.0\.1:\d+/,
            /https:\/\/127\.0\.0\.1:\d+/

    resource "*",
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head],
      credentials: true,
      expose: ['Set-Cookie']
  end
end