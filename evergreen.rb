# a quick, messy, lazy solution to porting the Evergreen static site to heroku
require 'sinatra'
require 'erb'

get '/' do
  erb :index
end

get '/contact' do
  erb :contact
end

get '/confessions' do
  erb :confessions
end

get '/preschool' do
  erb :preschool
end

get '/resources' do
  erb :resources
end

get '/under/:article' do
  erb :"under/#{params[:article]}"
end