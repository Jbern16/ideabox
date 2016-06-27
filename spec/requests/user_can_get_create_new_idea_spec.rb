require 'rails_helper'

describe "POST api/v1/ideas" do 
  it "it creates a new idea in the DB" do
    data = { data: {
      title: "title",
      body: "bodybodybodybody", 
      quality: "Genius"
      }
    }

    post '/api/v1/ideas', data

    idea = Idea.first
  
    expect(json_body).to eq({
      "id"=>idea.id,
      "data"=>{"body"=>"bodybodybodybody", 
                "title"=>"title", 
                "quality"=>"Genius"},
      "created_at"=>parse_date(idea.created_at),
      "updated_at"=>parse_date(idea.updated_at)
      })
    end 
  end 

