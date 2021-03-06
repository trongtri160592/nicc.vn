class CancerTypeController < ApplicationController
  layout 'manager', except: [:index, :details]
  before_action :authorize, except: [:index, :details]

  def index
    if I18n.locale == :en
      @cancer_types_alphabetical = CancerType.where.not(name_english: [nil, '']).order(:name_english)
                                   .group_by{ |cancer_type| cancer_type.name_english.strip[0].upcase }
    else
      @cancer_types_alphabetical = CancerType.where.not(name: [nil, '']).order(:name)
                                   .group_by{ |cancer_type| cancer_type.name.strip[0].upcase }
    end
  end

  def details
    @cancer_type = CancerType.find_by_id(params[:id])
	  set_meta_tags @cancer_type
  end

  def new
    @cancer_type = CancerType.new
  end

  def create
    @cancer_type = CancerType.new(cancer_type_params)
    if @cancer_type.save
      redirect_to "/manage-content", turbolinks: false, notice: "Cancer type: '#{@cancer_type.name}' has been uploaded."
    else
      render 'new'
    end
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

  def destroy
    @cancer_type = CancerType.find_by_id(params[:id])
    if @cancer_type
      @cancer_type.destroy
    end
    redirect_to '/manage-content'
  end

  protected
  def manage_category
    "type"
  end

  def page_title
    "Các loại ung thư"
  end

  private
  def cancer_type_params
    params.require(:cancer_type).permit(:name, :name_english, :description, :description_english, :is_common)
  end
end