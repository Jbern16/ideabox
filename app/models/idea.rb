class Idea < ActiveRecord::Base
  store_accessor :data,  :title, :body, :quality
  before_save :set_quality
  
  def set_quality
    self.quality ||= "Swill"
  end
end
