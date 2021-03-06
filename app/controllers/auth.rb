post '/login' do
  user = User.find_by(name: params[:user][:name])

  if user.try(:authenticate, params[:user][:password])
    session[:user_id] = user.id
    redirect '/surveys'
  else
    redirect '/'
  end
end

post '/users' do
  user = User.create(params[:user])


  if user.save
    session[:user_id] = user.id
    redirect "/"
  else
    redirect "/signup"
  end
end

get '/logout' do
  session.clear
  redirect '/'
end
