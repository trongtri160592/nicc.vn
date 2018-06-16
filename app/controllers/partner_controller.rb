class PartnerController < ApplicationController
  layout 'manager'
  before_action :authorize

  def manage
    @partners = Partner.all
  end

  def new
    @partner = Partner.new
  end

  def create
    @partner = Partner.new(partner_params)
    if @partner.save
      redirect_to partner_manage_path, notice: "Partner: '#{@partner.name}' has been uploaded."
    else
      render 'new'
    end
  end

  def edit
    @partner = Partner.find_by_id(params[:id])
  end

  def update
    @partner = Partner.find_by_id(params[:id])
    if @partner && @partner.update_attributes(partner_params)
      flash[:success] = "Bạn đã sửa đổi '#{@partner.name}' thành công"
    else
      flash[:danger] = "Bạn đã sửa đổi '#{@partner.name}' thất bại"
    end
    redirect_to partner_manage_path
  end

  def destroy
    @partner = Partner.find_by_id(params[:id])
    if @partner
      @partner.destroy
    end
    redirect_to partner_manage_path
  end

  protected

  def manage_category
    "partner"
  end

  private

  def partner_params
    params.require(:partner).permit(:name, :logo, :website)
  end
end