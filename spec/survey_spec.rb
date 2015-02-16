require_relative 'spec_helper'

# require 'capybara/rspec'
# require 'capybara/cucumber'
# Capybara.app = MyRackApp



class SurveySpec
  describe 'surveys' do
    let(:survey) { Survey.create(name: "Wazzzup" )}

    before do
      survey
    end

    it 'should respond to /' do
      get '/'
      expect(last_response).to be_ok
      expect(last_response.body).to include 'login'
      expect(last_response.body).to include 'orangustart!'
    end

    it 'should not have the navbar if user is not signed in' do
      get '/'
      expect(last_response.body).not_to include 'logout'
    end

    it 'should respond to /surveys' do
      get '/surveys'
      expect(last_response).to be_ok
      expect(last_response.body).to include 'Wazzzup'
      expect(last_response.body).to include 'take this survey'
    end

  end

end


class UserSpec
  describe 'users' do
    let(:user) { User.create(name: "Alex", password: "password", email: "alexrules@hotmail.com")}

    before do
      user
    end

    it 'should have a name' do
      expect(user.name).to eq("Alex")
    end

    it 'should have an email' do
      expect(user.email).to eq("alexrules@hotmail.com")
    end

    it 'should have an encrypted password' do
      expect(user.password_digest.length).to be > user.password.length
    end

  end
end

# class UserSpec < Test::Unit::TestCase   TODO: test auth
#   describe 'users' do
#     let(:user) { User.create(name: "Alex", password: "password", email: "alexrules")}

#     before do
#       user
#       session[:user_id] = user.id
#     end

#     it 'should respond to make your survey' do
#       get "/users/#{user.id}/surveys/new"
#       expect(last_response).to be_ok
#     end
#   end

# end
