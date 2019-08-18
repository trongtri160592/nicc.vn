class BannerController < ApplicationController
  layout 'manager'
  before_action :authorize

  def index
    @banner = Banner.new
    @banners = Banner.all.order('created_at DESC').paginate(:page => params[:page], :per_page => 20)
  end

  def new
    respond_to do |format|
      format.html {}
      format.js
    end
  end

  def create
    @banner = Banner.new(banner_params)
    if @banner.save
      redirect_to "/manage-banner", turbolinks: false, notice: "Upload banner #{@banner.name} thành công"
    else
      redirect_to "/manage-banner", turbolinks: false, notice: "Upload banner #{@banner.name} thât bại."
    end
  end

  def update
    @banner = Banner.find_by_id(params[:id])
    if @banner && @banner.update_attributes(cancer_type_params)
      flash[:success] = "Bạn đã sửa đổi banner '#{@banner.name}' thành công"
    else
      flash[:danger] = "Bạn đã sửa đổi banner '#{@banner.name}' thất bại"
    end
    redirect_to "/manage-banner"
  end

  def destroy
    @banner = Banner.find_by_id(params[:id])
    if @banner
      @banner.destroy
    end
    redirect_to '/manage-banner'
  end

  private
  def banner_params
    params.require(:banner).permit(:name, :image, :using)
  end

  protected
  def manage_category
    "banner"
  end
end
