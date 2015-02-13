get '/' do
  check_for_user
  redirect '/surveys'
end

get '/surveys' do
  check_for_user
  @surveys = Survey.all
  erb :'survey/index'
end

# New survey
get '/surveys/new' do
  check_for_user
  erb :'survey/new'
end

post '/surveys' do
  survey = Survey.create(params[:survey])
  redirect ("/surveys/#{survey.id}")
end

# Existing survey
get '/surveys/:id' do |id|
  check_for_user
  @survey = Survey.find(id)
  erb :'survey/show', locals: {survey: @survey}
end

get '/surveys/:id/edit' do |id|
  check_for_user
  @survey = Survey.find(id)
  erb :'survey/edit'
end

put '/surveys/:id' do |id|
  survey = Survey.find(id)
  survey.update(params[:survey])
  redirect ("/surveys/#{survey.id}")
end

delete '/surveys/:id' do |id|
  Survey.find(id).destroy
  redirect "/surveys"
end
