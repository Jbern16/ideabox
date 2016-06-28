class Api::V1::IdeasController < ApiController
  respond_to :json
  def index
    respond_with Idea.order(:created_at)
  end

  def create
    respond_with Idea.create(data: idea_params), location: nil
  end

  def destroy
    respond_with Idea.delete(params[:id])
  end 


  private
    def idea_params
      params.permit(:title, :body)
    end 
end