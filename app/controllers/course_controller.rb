class CourseController < ApplicationController
  layout 'manager', except: [:register, :add_trainee]
  before_action :authorize, except: [:register, :add_trainee]

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

  def register
    
  end

  def add_trainee
    @trainee = Course.new(trainee_params)
    if @trainee.save
      redirect_to course_register_path, notice: "Cảm ơn bạn đã đăng ký, chúng tôi sẽ liên hệ với bạn sớm nhất có thể"
    else
      render 'register'
    end
  end

  protected

  def manage_category
    "course"
  end

  private

  def course_params
    params.require(:course).permit(:name, :name_english, :description, :description_english)
  end

  def trainee_params
    params.require(:trainee).permit(:name, :email, :phone, :job, :job_address)
  end
end
