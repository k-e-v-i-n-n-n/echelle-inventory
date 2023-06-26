Rails.application.routes.draw do
  
  get "/busy_designers/:no", to: "designers#busy_designers"

  resources :designers
  resources :items
  resources :users
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  # ********************************LOGIN/SIGNUP/LOGOUT

  post "/signup", to: "users#create"

  post "/login", to: "sessions#show"

  get "/me", to: "users#show"

  delete "/logout", to: "sessions#destroy"

  delete "/delete/:id", to: "items#delete_designer_items"

  

  
end
