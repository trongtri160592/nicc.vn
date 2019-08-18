Rails.application.routes.draw do
  scope '(:locale)', locale: /en|vi/ do
    root 'welcome#index'
    # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

    # Create user
    # get '/signup', to: 'user#new'
    # post '/signup', to: 'user#create'

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
    get '/types', to: 'cancer_type#index', as: 'cancer_type_index'

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
    put '/manage-news', to: 'news#update_featured', as: 'news_update_featured'
    get '/news/new', to: 'news#new', as: 'news_new'
    post '/news/new', to: 'news#create'
    get '/news/edit/:id', to: 'news#edit', as: 'news_edit'
    post '/news/edit/:id', to: 'news#update'
    delete '/news/:id', to: 'news#destroy'
    get '/news', to: 'news#index'
    get '/news/:id', to: 'news#details', as: 'news_details'
    get '/news/filter(/:year)', to: 'news#filter', as: 'news_filter'

    # banner new, edit, update, destroy, index
    get '/manage-banner', to: 'banner#index', as: 'banner_manage'
    get '/banner/new', to: 'banner#new', as: 'banner_new'
    post '/banner/new', to: 'banner#create', as: 'banner_create'
    post '/banner/edit/:id', to: 'banner#update', as: 'banner_update'
    delete '/banner/:id', to: 'banner#destroy', as: 'banner_destroy'

    # Human resources
    get '/manage-hr', to: 'person#manage', as: 'person_manage'
    get '/person/new', to: 'person#new', as: 'person_new'
    post '/person/new', to: 'person#create'
    get '/person/edit/:id', to: 'person#edit', as: 'person_edit'
    post '/person/edit/:id', to: 'person#update'
    delete '/person/:id', to: 'person#destroy'
    get '/person/position/:id', to: 'person#position', as: 'person_position'
    get '/person', to: 'person#index'
    get '/person/:id', to: 'person#details', as: 'person_details'

    # Partner
    get '/manage-partner', to: 'partner#manage', as: 'partner_manage'
    get '/partner/new', to: 'partner#new', as: 'partner_new'
    post '/partner/new', to: 'partner#create'
    get '/partner/edit/:id', to: 'partner#edit', as: 'partner_edit'
    post '/partner/edit/:id', to: 'partner#update'
    delete '/partner/:id', to: 'partner#destroy'

    # About
    get '/about-us', to: 'about#summary', as: 'about_summary'
    get '/about-us/responsibilities', to: 'about#responsibilities', as: 'about_responsibilities'
    get '/manage-about', to: 'about#manage', as: 'about_manage'
    post '/about/update', to: 'about#update', as: 'about_update'

    # Search
    get '/search(.:format)', to: 'search#result', as: 'search'

    get '*path' => redirect('/')
  end
end
