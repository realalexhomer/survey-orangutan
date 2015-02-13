get '/' do
  if current_user
    redirect '/surveys'
  else
   erb :welcome
  end
end

get '/surveys' do
  if current_user
    @surveys = Survey.all
    erb :'survey/index'
  else
    redirect '/'
  end
end

# New survey
get '/surveys/new' do
  erb :'survey/new'
end

post '/surveys' do
  survey = Survey.create(params[:survey])
  redirect ("/surveys/#{survey.id}")
end

# Existing survey
get '/surveys/:id' do |id|
  @survey = Survey.find(id)
  erb :'survey/show', locals: {survey: @survey}
end

get '/surveys/:id/edit' do |id|
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
