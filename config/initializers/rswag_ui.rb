Rswag::Ui.configure do |c|

  # List the Swagger endpoints that you want to be documented through the
  # swagger-ui. The first parameter is the path (absolute or relative to the UI
  # host) and the second is a title that will be displayed in the document selector.
  # NOTE: If you're using rspec-api to expose Swagger files
  # (under openapi_root) as JSON or YAML endpoints, then the list below should
  # correspond to the relative paths for those endpoints.

  # Use environment-specific configuration
  if Rails.env.production?
    # In production (Render), use the full URL
    c.openapi_endpoint 'https://garage-management-backend-15de.onrender.com/api-docs/v1/swagger.json', 'API V1 Docs (Production)'
  else
    # In development, use relative path
    c.openapi_endpoint '/api-docs/v1/swagger.json', 'API V1 Docs (Development)'
  end

  # Add Basic Auth in case your API is private
  # c.basic_auth_enabled = true
  # c.basic_auth_credentials 'username', 'password'
end
