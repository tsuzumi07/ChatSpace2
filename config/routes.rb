Rails.application.routes.draw do
  devise_for :users
  get 'home/index'
  get 'home/show'

  root to: 'messages#index'
  resources :users, only: [:index, :edit, :update]
  resources :groups, only: [:new, :create, :edit, :update] do
    resources :messages, only: [:index, :create]
  end
end

