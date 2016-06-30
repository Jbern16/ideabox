require 'rails_helper'

describe "PATCH /api/v1/ideas/:id" do 
  it "updates the title of an idea" do 
    idea = Idea.create({ data: {
      title: "title",
      body: "bodybodybodybody", 
      quality: "Swill"
    }
  })

   data = {
      title: "New",
      body: "bodybodybodybody", 
      quality: "Plausible"
      }
    
    patch "/api/v1/ideas/#{idea.id}", data, {id: idea.id}

    expect(json_body).to eq({
      "id"=>idea.id,
      "data"=>{"body"=>"bodybodybodybody", 
                "title"=>"New", 
                "quality"=>"Plausible"},
      "created_at"=>parse_date(idea.created_at),
      "updated_at"=>json_body["updated_at"]
      })
    expect(Idea.find(idea.id).title).to eq "New"
  end
  it "updates the title of an idea" do 
    idea = Idea.create({ data: {
      title: "title",
      body: "bodybodybodybody", 
      quality: "Swill"
    }
  })

   data = {
      title: "title",
      body: "NEW", 
      quality: "Plausible"
      }
    
    patch "/api/v1/ideas/#{idea.id}", data, {id: idea.id}

    expect(json_body).to eq({
      "id"=>idea.id,
      "data"=>{"body"=>"NEW", 
                "title"=>"title", 
                "quality"=>"Plausible"},
      "created_at"=>parse_date(idea.created_at),
      "updated_at"=>json_body["updated_at"]
      })
    expect(Idea.find(idea.id).body).to eq "NEW"
  end

  
end
