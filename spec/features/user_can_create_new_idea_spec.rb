require 'rails_helper'

feature "User can create new idea" do 
  scenario "when a user fills out the the new idea form, the idea is added to the DB and the Dom and defaults to swill", js: true do 
    
    visit root_path

    within("#newIdea") do 
      fill_in "title", with: "New"
      fill_in "body", with: "Body"
      click_on "Save"
    end 

    wait_for_ajax

    expect(page).to have_content "New"
    expect(page).to have_content "Body"
    expect(page).to have_content "Swill"

    expect(Idea.first.title).to eq "New"
    expect(Idea.first.body).to eq "Body"
    expect(Idea.first.quality).to eq "Swill"
  end 
end  



