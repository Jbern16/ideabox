class Api::V1::IdeasController < ApiController
  respond_to :json
  def index
    respond_with Idea.order(:created_at)
  end

  def create 
    respond_with Idea.create(data: params[:data]), location: nil
  end

  def destroy
    respond_with Idea.delete(params[:id])
  end 
end