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

  # Cancer types edit, new, update, destroy
  get '/cancer-type/new', to: 'cancer_type#new', as: 'cancer_type_new'
  post '/cancer-type/new', to: 'cancer_type#create'
  get '/cancer-type/edit/:id', to: 'cancer_type#edit', as: 'cancer_type_edit'
  post '/cancer-type/edit/:id', to: 'cancer_type#update'
  get '/cancer-type/:id', to: 'cancer_type#details', as: 'cancer_type_detail'
  delete '/cancer-type/:id', to: 'cancer_type#destroy'
  get '/types', to: 'cancer_type#index'

  # Research edit, new, update, destroy, index
  get '/manage-research', to: 'research#manage', as: 'research_manage'
  get '/research/new', to: 'research#new', as: 'research_new'
  post '/research/new', to: 'research#create'
  get '/research/edit/:id', to: 'research#edit', as: 'research_edit'
  post '/research/edit/:id', to: 'research#update'
  delete '/research/:id', to: 'research#destroy'
  get '/research/categories/:id', to: 'research#category', as: 'research_category'
  get '/research', to: 'research#index'
  get '/research/:id', to: 'research#details', as: 'research_details'

  # News edit, new, update, destroy, index
  get '/manage-news', to: 'news#manage', as: 'news_manage'
  get '/news/new', to: 'news#new', as: 'news_new'
  post '/news/new', to: 'news#create'
  get '/news/edit/:id', to: 'news#edit', as: 'news_edit'
  post '/news/edit/:id', to: 'news#update'
  delete '/news/:id', to: 'news#destroy'
  get '/news', to: 'news#index'
  get '/news/:id', to: 'news#details', as: 'news_details'
end
