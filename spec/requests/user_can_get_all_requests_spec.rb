require 'rails_helper'

describe "GET api/v1/ideas" do 
  it "can return all ideas" do 
    idea_1 = Idea.create({ data: {
      title: "title",
      body: "bodybodybodybody", 
      quality: "Genius"
    }
  })
    idea_2 = Idea.create({ data: {
      title: "title2",
      body: "bodybodybodybody2", 
      quality: "Swill"
    }
  })

    get '/api/v1/ideas'
    
    expect(json_body).to eq([
      {"id"=>1,
      "data"=>{"body"=>"bodybodybodybody", 
                "title"=>"title", 
                "quality"=>"Genius"},
      "created_at"=>parse_date(idea_1.created_at),
      "updated_at"=>parse_date(idea_1.updated_at)},
      
      {"id"=>2,
      "data"=>{"body"=>"bodybodybodybody2", 
                "title"=>"title2", 
                "quality"=>"Swill"},
      "created_at"=>parse_date(idea_2.created_at),
      "updated_at"=>parse_date(idea_2.updated_at)}
    ])    
  end
end 

  



