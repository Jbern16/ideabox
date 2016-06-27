class Idea < ActiveRecord::Base
  store_accessor :data,  :title, :body, :quality
end
