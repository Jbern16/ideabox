require 'rails_helper'

describe "PATCH /api/v1/ideas/:id" do 
  it "updates the quality of an idea" do 
    idea = Idea.create({ data: {
      title: "title",
      body: "bodybodybodybody", 
      quality: "Swill"
      }
    })

    data = {
      title: "title",
      body: "bodybodybodybody", 
      quality: "Plausible"
      }

    patch "/api/v1/ideas/#{idea.id}", data, {id: idea.id}
  
    # expect(json_body).to eq({
    #   "id"=>idea.id,
    #   "data"=>{"body"=>"bodybodybodybody", 
    #             "title"=>"title", 
    #             "quality"=>"Plausible"},
    #   "created_at"=>parse_date(idea.created_at),
    #   "updated_at"=>json_body.updated_at
    #   })

    expect(Idea.find(idea.id).quality).to eq "Plausible"
 end
end 
