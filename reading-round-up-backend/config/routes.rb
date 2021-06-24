Rails.application.routes.draw do
  resources :books
  resources :ratings
  resources :users
  post '/login', to: 'sessions#create'
  get '/get_current_user', to: 'sessions#get_current_user'
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
