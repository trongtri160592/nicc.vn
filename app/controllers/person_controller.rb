class PersonController < ApplicationController
  layout 'manager', except: [:index, :position, :details]
  before_action :authorize, except: [:index, :position, :details]

  def index
    redirect_to person_position_path(id: Leadership.first.id) if Leadership.first
  end

  def position
    @positions = Leadership.all
    @position = Leadership.find_by_id(params[:id])
    @people = @position.people.paginate(:page => params[:page], :per_page => 7)
    if !@position
      render 'error/404', status: '404 Not Found'
    end
  end

  def details
    @person = Person.find_by_id(params[:id])
    if !@person
      render 'error/404', status: '404 Not Found'
    end
  end

  def manage
    @people = Person.all
  end

  def new
    @person = Person.new
  end

  def create
    @person = Person.new(person_params)
    if @person.save
      redirect_to person_manage_path, notice: "Person: '#{@person.name}' has been uploaded."
    else
      render 'new'
    end
  end

  def edit
    @person = Person.find_by_id(params[:id])
  end

  def update
    @person = Person.find_by_id(params[:id])
    if @person && @person.update_attributes(person_params)
      flash[:success] = "Bạn đã sửa đổi '#{@person.name}' thành công"
    else
      flash[:danger] = "Bạn đã sửa đổi '#{@person.name}' thất bại"
    end
    redirect_to person_manage_path
  end

  def destroy
    @person = Person.find_by_id(params[:id])
    if @person
      @person.destroy
    end
    redirect_to person_manage_path
  end

  protected

  def manage_category
    "person"
  end

  private

  def person_params
    params.require(:person).permit(:name, :portrait, :leadership_id, :background, :background_english)
  end
end