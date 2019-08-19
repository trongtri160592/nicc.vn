class CourseController < ApplicationController
  layout 'manager'
  before_action :authorize

  def manage
    @courses = Course.all
  end

  def new
    @course = Course.new
  end

  def create
    @course = Course.new(course_params)
    if @course.save
      redirect_to course_manage_path, notice: "Khóa học '#{@course.name}' đã upload thành công"
    else
      render 'new'
    end
  end

  def edit
    @course = Course.find_by_id(params[:id])
  end

  def update
    @course = Course.find_by_id(params[:id])
    if @course && @course.update_attributes(course_params)
      flash[:success] = "Bạn đã sửa đổi '#{@course.name}' thành công"
    else
      flash[:danger] = "Bạn đã sửa đổi '#{@course.name}' thất bại"
    end
    redirect_to course_manage_path
  end

  def destroy
    @course = Course.find_by_id(params[:id])
    if @course
      @course.destroy
    end
    redirect_to course_manage_path
  end

  protected

  def manage_category
    "course"
  end

  private

  def course_params
    params.require(:course).permit(:name, :name_english, :description, :description_english)
  end
end
