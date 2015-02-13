class CreateUserAnswers < ActiveRecord::Migration
  def change
    create_table :user_answers do |t|
      t.references :user
      t.references :option
      t.references :survey
      t.references :question

      t.timestamps
    end
  end
end
