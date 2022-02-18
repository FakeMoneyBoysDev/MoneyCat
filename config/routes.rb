Rails.application.routes.draw do
  scope '/api' do
    resources :coins
    resources :transactions
    resources :holdings
  end
  devise_for :users
  get '*path', to: 'home#index', constraints: ->(request){ request.format.html? }
  root 'home#index'
end

