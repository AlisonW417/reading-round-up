Rails.application.routes.draw do
  resources :books
  resources :ratings
  resources :users
  post '/login', to: 'sessions#create'
  get '/find_current_user', to: 'sessions#find_current_user'
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
