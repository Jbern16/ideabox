class CreateIdeas < ActiveRecord::Migration
  def change
    create_table :ideas do |t|
      t.jsonb :data, null: false, default: '{}'

      t.timestamps null: false
    end
  end
end
