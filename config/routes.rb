Rails.application.routes.draw do
  post 'posts', to: 'posts#create'
  root to: 'posts#index'
end
