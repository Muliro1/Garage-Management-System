Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins "http://localhost:4000", 
            "https://garage-management-frontend.onrender.com",
            "https://localhost:4000",
            "http://localhost:3000",
            "https://localhost:3000",
            "http://localhost:5173",
            "https://localhost:5173",
            /https:\/\/.*\.onrender\.com/,
            /http:\/\/localhost:\d+/,
            /https:\/\/localhost:\d+/

    resource "*",
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head],
      credentials: true,
      expose: ['Set-Cookie']
  end
end