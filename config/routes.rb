Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'
  namespace :api, defaults: { format: :json} do 
    resources :recommendations do
      get 'by_city/:city' => :by_city, on: :collection
    end
    resources :reviews, only: [:index, :show, :create, :update, :destroy]
  end
end
