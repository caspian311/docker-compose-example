require 'bundler'

Bundler.require(:default, ENV.fetch('RACK_ENV', 'development'))

class MyApp < Sinatra::Base
  configure :production, :development do
    enable :logging
  end
end

configure do
  enable :cross_origin

  set :bind, '0.0.0.0'
end

before do
  response.headers['Access-Control-Allow-Origin'] = '*'
end

options '*' do
  response.headers['Access-Control-Allow-Methods'] = 'GET, POST, OPTIONS, DELETE, PUT'
  response.headers['Access-Control-Allow-Headers'] = 'Authorization, Content-Type, Accept, X-User-Email, X-Auth-Token'
  response.headers['Access-Control-Allow-Origin'] = '*'
  200
end

get '/api' do
  payload = { message: 'success' }
  json payload
end
