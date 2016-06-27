require 'rails_helper'

describe "DELETE api/v1/ideas/:id" do 
  it "can delete an idea from the DB" do 
      db_idea = Idea.create({ data: {
        title: "title",
        body: "bodybodybodybody", 
        quality: "Genius"
      }
    })

    expect(Idea.count).to eq 1    
    
    idea = Idea.find(db_idea.id)

    delete "/api/v1/ideas/#{idea.id}"

    expect(response.body).to eq("")

    expect(Idea.count).to eq 0

  end
end  



