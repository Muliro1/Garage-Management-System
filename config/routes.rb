






Rails.application.routes.draw do
  # resources for users
  resources :users , only: [:index,:show, :create, :update, :destroy] do

    #nested resource for vehicles
    resources :vehicles, only: [:create, :update, :destroy] do
    end
  end

  # user signup route
  post "/signup", to: "users#create"

  #user login route
  post "/login", to: "sessions#create"

  #admin signup route
  post "/admins/signup", to: "admins#create"

  #admin login route
  post "admins/login", to: "admin_sessions#create"

  #admin logout
  delete "admins/logout", to: "admin_sessions#destroy"
  
  #user logout route
  delete "/logout", to: "sessions#destroy"
end
