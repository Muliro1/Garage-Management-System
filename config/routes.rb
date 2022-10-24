






Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  resources :users , only: [:index,:show, :create, :update, :destroy] do
    resources :vehicles, only: [:create, :update, :destroy] do
    end
  end
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  #post "/vehicle", to: "vehicles#create"
  delete "/logout", to: "sessions#destroy"
end
