class CancerTypeController < ApplicationController
  layout 'manager', only: [:edit, :new]
  before_action :authorize, except: [:index, :show]

  def index

  end

  def show

  end

  def edit
    @cancer_type = CancerType.find_by_id(params[:id])
  end

  def update
    @cancer_type = CancerType.find_by_id(params[:id])
    if @cancer_type && @cancer_type.update_attributes(cancer_type_params)
      flash[:success] = "Bạn đã sửa đổi loại ung thư '#{@cancer_type.name}' thành công"
    else
      flash[:danger] = "Bạn đã sửa đổi loại ung thư '#{@cancer_type.name}' thất bại"
    end
    redirect_to "/manage-content"
  end

  def new
    @cancer_type = CancerType.new
  end

  def create
    @cancer_type = CancerType.new(cancer_type_params)
    if @cancer_type.save
      redirect_to "/manage-content", notice: "Cancer type: '#{@cancer_type.name}' has been uploaded."
    else
      render 'new'
    end
  end

  def destroy
    @cancer_type = CancerType.find_by_id(params[:id])
    if @cancer_type
      @cancer_type.destroy
    end
    redirect_to '/manage-content'
  end

  private

  def cancer_type_params
    params.require(:cancer_type).permit(:name, :name_english, :description, :description_english)
  end
end