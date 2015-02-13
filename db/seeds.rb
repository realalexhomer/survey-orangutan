NUM_USERS = 5
NUM_SURVEYS = 5
NUM_QUESTIONS = 5
NUM_OPTIONS = 5
NUM_USER_ANSWERS = 5

(NUM_USERS).times do
  User.create(
    name: Faker::Name.name,
    email: Faker::Internet.email,
    password: Faker::Internet.password
    )
end

(NUM_SURVEYS).times do
  Survey.create(
    name: Faker::Lorem.word,
    user_id: rand(1..NUM_USERS)
    )
end

(NUM_QUESTIONS).times do
  Question.create(
    title: Faker::Lorem.sentence.gsub!(".", "?"),
    survey_id: rand(1..NUM_SURVEYS)
    )
end

(NUM_OPTIONS).times do
  Option.create(
    answer: Faker::Lorem.word,
    question_id: rand(1..NUM_QUESTIONS)
    )
end

(NUM_USER_ANSWERS).times do
  UserAnswer.create(
    user_id: rand(1..NUM_USERS),
    survey_id: rand(1..NUM_SURVEYS),
    question_id: rand(1..NUM_QUESTIONS),
    option_id: rand(1..NUM_OPTIONS)
    )
end
