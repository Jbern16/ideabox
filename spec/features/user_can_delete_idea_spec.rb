require 'rails_helper'

feature "User can delete idea" do 
  scenario "when a user clicks delete on an idea, it is deleted from DOM and DB ", js: true do
    idea = Idea.create({ data: {
        title: "title",
        body: "bodybodybodybody", 
        quality: "Genius"
      }
    }) 
    
    visit root_path

    within(".eachIdea") do 
      click_on "Delete"
    end 

    wait_for_ajax

    expect(page).not_to have_content "title"
    expect(page).not_to have_content "bodybodybodybody"
    expect(page).not_to have_content "Genius"

    expect(Idea.count).to eq 0
    
  end 
end  