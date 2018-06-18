class NewsController < ApplicationController
  layout 'manager', except: [:index, :details, :filter]
  before_action :authorize, except: [:index, :details, :filter]

  def index
    @news_arr = News.all
  end

  def details
    @news = News.find_by_id(params[:id])
    if !@news
      render 'error/404', status: '404 Not Found'
    end
  end
  
  def filter
	@news_arr = News.where('extract(year from created_at) = ?', params[:year])
	render 'index'
  end

  def manage
    @news_arr = News.all
  end

  def new
    @news = News.new
  end

  def create
    @news = News.new(news_params)
    if @news.save
      redirect_to news_manage_path, notice: "News: '#{@news.title}' has been uploaded."
    else
      render 'new'
    end
  end

  def edit
    @news = News.find_by_id(params[:id])
  end

  def update
    @news = News.find_by_id(params[:id])
    if @news && @news.update_attributes(news_params)
      flash[:success] = "Bạn đã sửa đổi '#{@news.title}' thành công"
    else
      flash[:danger] = "Bạn đã sửa đổi '#{@news.title}' thất bại"
    end
    redirect_to news_manage_path
  end

  def destroy
    @news = News.find_by_id(params[:id])
    if @news
      @news.destroy
    end
    redirect_to news_manage_path
  end

  protected
  def manage_category
    "news"
  end

  private

  def news_params
    params.require(:news).permit(:title, :title_english, :thumbnail, :content, :content_english)
  end
end