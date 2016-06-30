require 'rails_helper'

feature "User can edit quality of idea" do 
  scenario "when a user clicks downvote on an idea, it is downvoted", js: true do
    idea = Idea.create({ data: {
        title: "title",
        body: "bodybodybodybody", 
        quality: "Plausible"
      }
    }) 
    
    visit root_path

    click_on "Downvote"
    
    wait_for_ajax
    
    expect(page).to have_content "title"
    expect(page).to have_content "bodybodybodybody"
    expect(page).to have_content "Swill"

    expect(Idea.first.quality).to eq "Swill"
  end 
  scenario "when a user clicks downvote on Swill, it stays swill", js: true do
    idea = Idea.create({ data: {
        title: "title",
        body: "bodybodybodybody", 
        quality: "Swill"
      }
    }) 
    
    visit root_path

    click_on "Downvote"
    
    wait_for_ajax
    
    expect(page).to have_content "title"
    expect(page).to have_content "bodybodybodybody"
    expect(page).to have_content "Swill"

    expect(Idea.first.quality).to eq "Swill"
  end 
end  