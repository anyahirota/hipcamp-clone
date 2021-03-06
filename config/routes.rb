Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :spots, only: [:show, :index]
    resources :bookings, except: [:new, :edit]
    resources :reviews, except: [:new, :edit]
  end 
  
  
  root "static_pages#root"
end
