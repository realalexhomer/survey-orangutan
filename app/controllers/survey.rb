get '/' do
  if check_for_user
    redirect '/surveys'
  end
    erb :welcome
end

get '/surveys' do
  check_for_user
  @surveys = Survey.all
  erb :'survey/index'
end

# NON AJAX ROUTES #####################################################


get '/users/:id/surveys/new' do
  unless check_for_user
    redirect '/'
  end
  erb :'survey/new'
end

post '/surveys' do
  survey = Survey.create(params[:survey])
  redirect ("/surveys/#{survey.id}")
end

# Existing survey
get '/surveys/:id' do |id|
  unless check_for_user
    redirect '/'
  end
  @survey = Survey.find(id)
  @Questions = "."
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

post '/surveys/:id/answer' do
  UserAnswer.create(params[:UserAnswer])
end

#AJAX ROUTES ###########################################################

post '/surveys.json' do
  content_type :json
  survey = Survey.create(params[:survey])
  survey.to_json
end

post '/questions.json' do
  content_type :json
  question = Question.create(params[:question])
  question.to_json
end

post '/options.json' do
  content_type :json
  option = Option.create(params[:option])
  option.to_json
end

post '/answers.json' do
  content_type :json
  answer = UserAnswer.create(params[:answer])
  answer.to_json
end


