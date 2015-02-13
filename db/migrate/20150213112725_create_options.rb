class CreateOptions < ActiveRecord::Migration
  def change
    create_table :options do |t|
      t.references :question
      t.string :answer

      t.timestamps
    end
  end
end
