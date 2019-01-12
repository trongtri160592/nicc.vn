class ResearchController < ApplicationController
  layout 'manager', except: [:index, :category, :details]
  before_action :authorize, except: [:index, :category, :details]

  def index
    redirect_to research_category_path(id: ResearchCategory.first.id) if ResearchCategory.first
  end

  def category
    @categories = ResearchCategory.all
    @category = ResearchCategory.find_by_id(params[:id])
    @researches = @category.research.paginate(:page => params[:page], :per_page => 7)
    if !@category
      render 'error/404', status: '404 Not Found'
    end
  end

  def details
    @research = Research.find_by_id(params[:id])
    set_meta_tags @research
    if !@research
      render 'error/404', status: '404 Not Found'
    end
  end

  def manage
    @researches = Research.paginate(:page => params[:page], :per_page => 20)
  end

  def new
    @research = Research.new
  end

  def create
    @research = Research.new(research_params)
    if @research.save
      redirect_to research_manage_path, notice: "Research: '#{@research.title}' has been uploaded."
    else
      render 'new'
    end
  end

  def edit
    @research = Research.find_by_id(params[:id])
  end

  def update
    @research = Research.find_by_id(params[:id])
    if @research && @research.update_attributes(research_params)
      flash[:success] = "Bạn đã sửa đổi '#{@research.title}' thành công"
    else
      flash[:danger] = "Bạn đã sửa đổi '#{@research.title}' thất bại"
    end
    redirect_to research_manage_path
  end

  def destroy
    @research = Research.find_by_id(params[:id])
    if @research
      @research.destroy
    end
    redirect_to research_manage_path
  end

  protected

  def manage_category
    "research"
  end

  def page_title
    "Nghiên cứu và đào tạo"
  end

  private

  def research_params
    params.require(:research).permit(:title, :title_english, :description, :description_english, :research_category_id)
  end
end