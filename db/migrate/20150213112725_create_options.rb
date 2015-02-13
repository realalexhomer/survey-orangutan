class CreateOptions < ActiveRecord::Migration
  def change
    create_table :options do |t|
      t.references :question
      t.string :answer_text

      t.timestamps
    end
  end
end
