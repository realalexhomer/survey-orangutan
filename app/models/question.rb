class Question < ActiveRecord::Base
  has_many :options
  has_many :user_answers
  belongs_to :survey
end
