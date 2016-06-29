require 'rails_helper'

feature "User can edit body of idea" do 
  scenario "when a user fill is in new body, it is updated", js: true do
    idea = Idea.create({ data: {
        title: "title",
        body: "bodybodybodybody", 
        quality: "Plausible"
      }
    }) 
    
    visit root_path

    body = find("#body#{idea.id}")
    body.set "EDITED"
    click_on "Save"

    wait_for_ajax
    
    expect(page).to have_content ""
    expect(page).to have_content "EDITED"
    expect(page).to have_content "Swill"
  end 
  scenario "when a user fill is in new body, it is updated", js: true do
    idea = Idea.create({ data: {
        title: "title",
        body: "bodybodybodybody", 
        quality: "Plausible"
      }
    }) 
    
    visit root_path

    body = find("#header#{idea.id}")
    body.set "EDITED"
    click_on "Save"

    wait_for_ajax
    
    expect(page).to have_content "bodybodybodybody"
    expect(page).to have_content "EDITED"
    expect(page).to have_content "Swill" 
  end
end  