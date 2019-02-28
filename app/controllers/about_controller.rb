class AboutController < ApplicationController
  layout 'manager', except: [:summary, :responsibilities]
  before_action :authorize, except: [:summary, :responsibilities]

  def summary

  end

  def responsibilities

  end

  def manage
    @introduction = Introduction.first
    if !@introduction
      @introduction = Introduction.new
    end
  end

  def update
    @introduction = Introduction.first
    if (!@introduction)
      @introduction = Introduction.new(introduction_params)
      if @introduction.save
        flash[:success] = "Bạn đã cập nhật thông tin thành công"
      else
        flash[:danger] = "Bạn đã cập nhật thông tin thất bại."
      end
    else
      @introduction = Introduction.first
      if @introduction.update_attributes(introduction_params)
        flash[:success] = "Bạn đã cập nhật thông tin thành công"
      else
        flash[:danger] = "Bạn đã cập nhật thông tin thất bại."
      end
    end
    redirect_to "/manage-about"
  end

  protected

  def manage_category
    "about"
  end

  private

  def introduction_params
    params.require(:introduction).permit(:responsibility, :responsibility_en, :summary, :summary_en)
  end
end
