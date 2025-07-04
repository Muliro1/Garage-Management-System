Rails.application.routes.draw do
  # Swagger UI and API documentation
  mount Rswag::Ui::Engine => '/swagger'
  mount Rswag::Api::Engine => '/api-docs'
  
  # Root route - redirect to Swagger UI
  root to: redirect('/swagger')
  
  # API welcome endpoint
  get '/api', to: "application#index"
  
  # Health check endpoint for CORS testing
  get '/health', to: "application#health"
  
  # CORS test endpoint
  get '/cors-test', to: "application#cors_test"
  
  # CORS preflight requests
  match '*path', to: 'application#handle_options', via: :options
  
  # resources for users
  resources :users , only: [:index,:show, :create, :update, :destroy] do

    #nested resource for vehicles
  
  end

  resources :vehicles

  # technician resources
  resources :technicians, only: [:index,:show, :create, :update, :destroy] 

    #nested routes for parts
  resources :parts, only: [:index, :show, :create, :update, :destroy]

  resources :guards, only: [:index, :update, :destroy]
  resources :vehicles
  get "/vehicles", to: "vehicles#index"
  

  #vehicle delete route
  delete "/vehicle/:id", to:"vehicles#destroy"

  #vehicle update route
  

  # user signup route
  post "/signup", to: "users#create"

  #user login route
  post "/login", to: "sessions#create"

  get "/profile", to: "users#profile"

  #admin signup route
  post "/admins/signup", to: "admins#create"

  #admin login route
  post "admins/login", to: "admin_sessions#create"
  get 'admins/me', to: 'admins#show'

  #admin logout route
  delete "/admins/logout", to: "admin_sessions#destroy"

  #get all admins route
  get "/admins", to: "admins#index"
  
  #user logout route
  delete "/logout", to: "sessions#destroy"

  #guard signup route
  post "/guards/signup", to: "guards#create"

  #guard login route
  post "/guards/login", to: "guard_sessions#create"

  #guard logout route
  delete "/guards/logout", to:"guard_sessions#destroy"

  #technician signup route
  post "/technicians/signup", to: "technicians#create"

  #technician login route
  post "/technicians/login", to: "technician_sessions#create"
  options "/technicians/login", to: "technician_sessions#create"

  #technician logout route
  delete "/technicians/logout", to: "technician_sessions#destroy"

end
