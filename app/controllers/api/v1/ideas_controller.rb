class Api::V1::IdeasController < ApiController
  respond_to :json
  def index
    respond_with Idea.all
  end

  def create 
    respond_with Idea.create(data: params[:data]), location: nil
  end

  def destroy
    respond_with Idea.destroy(params[:id])
  end 
end