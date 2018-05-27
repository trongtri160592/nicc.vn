Rails.application.routes.draw do
  get 'welcome/index'
  root 'welcome#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # Create user
  get '/signup', to: 'user#new'
  post '/signup', to: 'user#create'

  # login, logout
  get '/admin', to: 'sessions#new'
  post '/admin', to: 'sessions#create'
  get '/logout', to: 'sessions#destroy'

  # Manage content
  get '/manage-content', to: 'manager#index'

  # Cancer types edit, new
  get '/cancer-types/new', to: 'cancer_type#new'
  post '/cancer-types/new', to: 'cancer_type#create'
  get '/cancer-types/edit/:id', to 'cancer_type#edit'
end
