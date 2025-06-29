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
            # Swagger UI specific origins
            "http://localhost:3000/swagger",
            "https://localhost:3000/swagger",
            "https://garage-management-backend-15de.onrender.com/swagger",
            # Allow all Render domains (including subdomains)
            /https:\/\/.*\.onrender\.com/,
            /http:\/\/.*\.onrender\.com/,
            # Allow all localhost variations (for development)
            /http:\/\/localhost:\d+/,
            /https:\/\/localhost:\d+/,
            # Allow all 127.0.0.1 variations (for development)
            /http:\/\/127\.0\.0\.1:\d+/,
            /https:\/\/127\.0\.0\.1:\d+/,
            # Allow any origin for Swagger UI in development
            /.*/

    resource "*",
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head],
      credentials: true,
      expose: ['Set-Cookie', 'Content-Type', 'Authorization']
  end
end